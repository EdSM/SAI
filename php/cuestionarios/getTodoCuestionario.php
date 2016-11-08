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
     $consulta="SELECT * FROM cuestionarios WHERE cueActivo = TRUE;";
     if ( $result = $database->query($consulta) ) {

       if( $result->num_rows > 0 ) {
         $i=0;
         while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {

           $cliId = $row['cueId'];
           $cueNombre = $row['cueNombre'];
           $cueActivo= $row['cueActivo'];
           $cueMaterias = $row['cueMaterias'];
           $cueCategorias = $row['cueCategorias'];

           $data[]= array(
             'cueId'=> $cueId,
             'cueNombre' => $cueNombre,
             'cueActivo' => $cueActivo,
             'cueMaterias' => $cueMaterias,
             'cueCategorias' => $cueCategorias
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
           'message' => 'No se encontraron clientes registrados'
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
