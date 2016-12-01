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
     $idMateria = ($_POST['idMateria']);
     $consulta = "SELECT t.temId, t.temNombre, m.matNombre FROM temas t, materias m WHERE t.temMateria = '.$idMateria.' AND t.temMateria=m.matId  ;";
     if ( $result = $database->query($consulta) ) {

       if( $result->num_rows > 0 ) {
         $i=0;
         while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
          //$entNombre =  utf8_encode ( $row['entNombre']);
           $temId = $row['temId'];
           $temNombre = $row['temNombre'];
           $matNombre = $row['matNombre'];
           $data[]= array('temId'=>$temId,
                          'temNombre' => $temNombre,
                          'matNombre' => $matNombre);
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
