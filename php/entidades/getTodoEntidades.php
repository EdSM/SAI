<?php
session_start();
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
     $consulta = "SELECT entId, entNombre FROM entidades;";
     if ( $result = $database->query($consulta) ) {

       if( $result->num_rows > 0 ) {
         $i=0;
         while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
          //$entNombre =  utf8_encode ( $row['entNombre']);
           $entNombre = $row['entNombre'];
           $entId = $row['entId'];
           $data[]= array('entId'=>$entId, 'entNombre' => $entNombre);
           $i++;

        }
         //mysqli_free_result($result);

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

  $jsonFinal = json_encode($response);
  echo $jsonFinal;

?>
