<?php

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
     $idCliente = ($_POST['idCliente']);
     $consulta="SELECT a.aplId, a.aplFechaAplicacion, c.cueNombre FROM aplicacion a, cuestionarios c WHERE a.aplClientes = 1 AND aplCuestionarios=cueId;";
     if ( $result = $database->query($consulta) ) {

       if( $result->num_rows > 0 ) {
         $i=0;
         while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {

           $aplId = $row['aplId'];
           $aplFechaAplicacion = $row['aplFechaAplicacion'];
           $cueNombre= $row['cueNombre'];

           $data[]= array(
             'aplId'=> $aplId,
             'aplFechaAplicacion' => $aplFechaAplicacion,
             'cueNombre' => $cueNombre,
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
           'message' => 'No se encontraron aplicaciones registrados'
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
