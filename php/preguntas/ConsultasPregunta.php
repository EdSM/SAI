<?php
class ConsultasPregunta {
public function consultaGetPreguntaRespuestaC($consulta) {
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
             $preId = $row['preId'];
             $preOracion = $row['preOracion'];
             $preSubtema = $row['preSubtema'];
             $preCategoria = $row['preCategoria'];
             $preLista1 = $row['preLista1'];
             $data[]= array('preId'=>$preId,
                            'preOracion' => $preOracion,
                            'preSubtema' => $preSubtema,
                            'preCategoria' => $preCategoria,
                            'preLista1' => $preLista1
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
