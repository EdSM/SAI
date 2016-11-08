<?php
$idEntidad=($_POST['idEntidad']);
$idMunicipio=($_POST['idMunicipio']);
$idCultura=($_POST['idCultura']);
if( isset( $idEntidad ) || isset( $idMunicipio ) || isset( $idCultura )) {

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
       $sqlSelect=' SELECT s.sitId, s.sitNombre, s.sitArea, c.culNombre, m.munNombre, m.munId, e.entNombre, SUBSTR(s.sitHistoria,1,120) AS sitHistoria ';
       $sqlFrom=' FROM sitios s, culturas c, municipios m, entidades e ';

       if (($idEntidad !=0) && ($idMunicipio == 0) && ($idCultura == 0)) {  //todo entidad
         $sqlWhere=' WHERE e.entId='.$idEntidad.' AND e.entId=m.munEntidad AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId GROUP BY s.sitId ORDER BY s.sitNombre; ';
         $consulta=$sqlSelect.$sqlFrom.$sqlWhere;
       }
       if (($idEntidad ==0) && ($idMunicipio == 0) && ($idCultura != 0)) {  //por cultura
         $sqlWhere=' WHERE c.culId='.$idCultura.' AND m.munEntidad=e.entId AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId GROUP BY s.sitId ORDER BY s.sitNombre; ';
         $consulta=$sqlSelect.$sqlFrom.$sqlWhere;
       }
       if (($idEntidad !=0) && ($idMunicipio != 0) && ($idCultura == 0)) {  //por entidad, municipio
         $sqlWhere=' WHERE m.munId='.$idMunicipio.' AND m.munEntidad=e.entId AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId GROUP BY s.sitId ORDER BY s.sitNombre; ';
         $consulta=$sqlSelect.$sqlFrom.$sqlWhere;
       }
       if (($idEntidad !=0) && ($idMunicipio != 0) && ($idCultura != 0)) {  //por entidad, municipio cultura
         $sqlWhere=' WHERE m.munId='.$idMunicipio.' AND c.culId='.$idCultura.' AND m.munEntidad=e.entId AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId GROUP BY s.sitId ORDER BY s.sitNombre; ';
         $consulta=$sqlSelect.$sqlFrom.$sqlWhere;
       }
       if (($idEntidad !=0) && ($idMunicipio == 0) && ($idCultura != 0)) {  //por entidad,  cultura
         $sqlWhere=' WHERE e.entId='.$idEntidad.' AND c.culId='.$idCultura.' AND m.munEntidad=e.entId AND m.munId=s.sitMunicipios AND s.sitCulturas= c.culId GROUP BY s.sitId ORDER BY s.sitNombre; ';
         $consulta=$sqlSelect.$sqlFrom.$sqlWhere;
       }

       if ( $result = $database->query($consulta) ) {

         if( $result->num_rows > 0 ) {
           $i=0;
           while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
             $sitId     = $row['sitId'];
             $sitNombre = $row['sitNombre'];
             $sitArea   = $row['sitArea'];
             $culNombre = $row['culNombre'];
             $munNombre = $row['munNombre'];
             $munId     = $row['munId'];
             $entNombre = $row['entNombre'];
             $sitHistoria=$row['sitHistoria'];

             $data[]= array('sitId'=>$sitId,
                            'sitNombre' => $sitNombre,
                            'sitArea'   =>$sitArea,
                            'culNombre' =>$culNombre,
                            'munNombre' =>$munNombre,
                            'munId'     =>$munId,
                            'entNombre' =>$entNombre,
                            'sitHistoria'=>$sitHistoria
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
