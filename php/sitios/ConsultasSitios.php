<?php
class ConsultasSitios {
public function consultaGetSitios($consulta) {
    include('../Consultas.php');
    $Consultas = new Consultas;
    $ConexionBD = $Consultas->establecerConexion();
    $database = $ConexionBD->conectarBD();

    if($database->connect_errno) {
      $response = array(
          'status' => 'ERROR',
          'message' => 'No se puede conectar a la base de datos'
        );
     }
     else{
       if ( $result = $database->query($consulta) ) {

         if( $result->num_rows > 0 ) {
           $i=0;
           while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {


               $sitId     = $row['sitId'];
               $sitNombre = $row['sitNombre'];
               $sitRegInah = $row['sitRegInah'];
               $sitRegVhc  = $row['sitRegVhc'];
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
                              'sitRegInah'=> $sitRegInah,
                              'sitRegVhc' => $sitRegVhc,
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



           }
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
      } else {
        $response = array(
            'status' => 'ERROR',
            'message' => $database->error
          );
      }
      $ConexionBD->desconectarDB($database);
    }
    return $response;
  }

  public function consultaSeleccionarSitio($consulta) {
      include('../Consultas.php');
      $Consultas = new Consultas;
      $ConexionBD = $Consultas->establecerConexion();
      $database = $ConexionBD->conectarBD();

      if($database->connect_errno) {
        $response = array(
            'status' => 'ERROR',
            'message' => 'No se puede conectar a la base de datos'
          );
       }
       else{
         if ( $result = $database->query($consulta) ) {

           if( $result->num_rows > 0 ) {
             $i=0;
             while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {


                 $sitId     = $row['sitId'];
                 $sitNombre = $row['sitNombre'];
                 $sitRegInah = $row['sitRegInah'];
                 $sitRegVhc  = $row['sitRegVhc'];
                 $sitArea   = $row['sitArea'];
                 $sitOcupacion  = $row['sitOcupacion'];
                 $sitActividades= $row['sitActividades'];
                 $sitHistoria   = $row['sitHistoria'];
                 $sitActividadTuristica = $row['sitActividadTuristica'];
                 $sitTuristica  = $row['sitTuristica'];
                 $sitPublico    = $row['sitPublico'];
                 $sitMapa    = $row['sitMapa'];
                 $sitClave   = $row['sitClave'];
                 $sitMunicipio   = $row['sitMunicipios'];
                 $sitCulturas    = $row['sitCulturas'];


                 $data[]= array('sitId'=>$sitId,
                                'sitNombre' => $sitNombre,
                                'sitRegInah'=> $sitRegInah,
                                'sitRegVhc' => $sitRegVhc,
                                'sitArea'   =>$sitArea,
                                'sitOcupacion'  =>$sitOcupacion,
                                'sitActividades'=>$sitActividades,
                                'sitHistoria'   =>$sitHistoria,
                                'sitActividadTuristica'=>$sitActividadTuristica,
                                'sitTuristica'  =>$sitTuristica,
                                'sitPublico'    =>$sitPublico,
                                'sitMapa'    =>$sitMapa,
                                'sitClave'   =>$sitClave,
                                'sitMunicipio'   =>$sitMunicipio,
                                'sitCulturas'   =>$sitCulturas
                               );



             }
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
        } else {
          $response = array(
              'status' => 'ERROR',
              'message' => $database->error
            );
        }
        $ConexionBD->desconectarDB($database);
      }
      return $response;
    }

}
?>
