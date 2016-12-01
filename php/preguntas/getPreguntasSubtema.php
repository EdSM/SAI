<?php
//session_start();
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
     $idSubtema = ($_POST['idSubtema']);
     $consulta = 'SELECT p.preId, p.preOracion, s.subNombre FROM preguntas p, subtemas s WHERE p.preSubtema = '.$idSubtema.' AND p.preSubtema  = s.subId;';
     if ( $result = $database->query($consulta) ) {

       if( $result->num_rows > 0 ) {
         $i=0;
         while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
          //$entNombre =  utf8_encode ( $row['entNombre']);
           $preId = $row['preId'];
           $subNombre = $row['subNombre'];
           $preOracion = $row['preOracion'];
           $data[]= array('preId'=>$preId,
                          'subNombre' => $subNombre,
                          'preOracion' => $preOracion
            );
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
