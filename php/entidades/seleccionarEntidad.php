<?php
session_start();
  $idEntidad = ($_POST['idEntidad']);

  if (isset($idEntidad)) {

    include('ConsultasEntidad.php');
    $ConsultasEntidad = new ConsultasEntidad;
    $consulta = 'SELECT entId, entNombre FROM entidades WHERE entId = '.$idEntidad.' ;';
    $response = $ConsultasEntidad -> consultaGetEntidades($consulta);
  }
  else {
      $response = array(
        'status' => 'ERROR',
        'message'=>'Faltan parametros al solicitar petición'
      );
  }
  $jsonFinal = json_encode($response);
  echo $jsonFinal;

?>
