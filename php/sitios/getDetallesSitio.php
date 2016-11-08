<?php
$idSitio=($_POST['idSitio']);
if( isset( $idSitio ) ) {

    include('../Conexion.php');
    $ConexionBD = new Conexion;
    $database = $ConexionBD->conectarBD();

    if($database->connect_errno) {
      $response = array(
          'status' => 'ERROR',
          'message' => 'No se puede conectar a la base de datos'
        );
     }
     else{
       $sqlSelect=' SELECT s.sitId, s.sitNombre, s.sitArea, s.sitOcupacion, s.sitActividades, s.sitHistoria, s.sitActividadTuristica, s.sitTuristica, s.sitPublico, s.sitMapa, c.culNombre, m.munNombre, e.entNombre, em.empNombre';
       $sqlFrom=' FROM sitios s, culturas c, municipios m, entidades e, emplazamientos em ';
       $sqlWhere=' WHERE s.sitId='.$idSitio.' AND s.sitEmplazamiento=em.empId AND e.entId=m.munEntidad AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId;  ';
       $consulta=$sqlSelect.$sqlFrom.$sqlWhere;


       if ( $result = $database->query($consulta) ) {

         if( $result->num_rows > 0 ) {
           $i=0;
           while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
             $sitId     = $row['sitId'];
             $sitNombre = $row['sitNombre'];
             $sitArea   = $row['sitArea'];
             $sitOcupacion  = $row['sitOcupacion'];
             $sitActividades= $row['sitActividades'];
             $sitHistoria   = $row['sitHistoria'];
             $sitActividadTuristica = $row['sitActividadTuristica'];
             $sitTuristica  = $row['sitTuristica'];
             $sitPublico    = $row['sitPublico'];
             $sitMapa    = $row['sitMapa'];
             $culNombre = $row['culNombre'];
             $munNombre = $row['munNombre'];
             $entNombre = $row['entNombre'];
             $empNombre = $row['empNombre'];


             $data[]= array('sitId'=>$sitId,
                            'sitNombre' => $sitNombre,
                            'sitArea'   =>$sitArea,
                            'sitOcupacion'  =>$sitOcupacion,
                            'sitActividades'=>$sitActividades,
                            'sitHistoria'   =>$sitHistoria,
                            'sitActividadTuristica'=>$sitActividadTuristica,
                            'sitTuristica'  =>$sitTuristica,
                            'sitPublico'    =>$sitPublico,
                            'sitMapa'    =>$sitMapa,
                            'culNombre' =>$culNombre,
                            'munNombre' =>$munNombre,
                            'entNombre' =>$entNombre,
                            'empNombre' =>$empNombre
                           );
             $i++;
           }
           mysqli_free_result($result);

           $response = array(
             'status' => 'OK',
             'data' => $data,
             'message' => 'Resultados obtenidos'
           );

         } else {
           $response = array(
             'status' => 'ERROR',
             'message' => 'No se encontraron resultados'
           );
         }
         //$result->close();

      } else {
        $response = array(
            'status' => 'ERROR',
            'message' => $database->error
          );
      }
         $ConexionBD->desconectarDB($database);
    }

  } else {
    $response = array(
              'status' => 'ERROR',
              'message' => "Faltan parámetros al enviar petición"
            );
  }
  $jsonFinal = json_encode($response);
  echo $jsonFinal;
?>
