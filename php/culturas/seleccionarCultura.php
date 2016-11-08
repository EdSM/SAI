<?php
session_start();
  $idCultura = ($_POST['idCultura']);

  if (isset($idCultura)) {
    include('ConsultasCultura.php');
    $ConsultasCultura = new ConsultasCultura;
    $consulta = 'SELECT culId, culNombre FROM culturas WHERE culId = '.$idCultura.' ;';
    $response = $ConsultasCultura -> consultaGetCultura($consulta);
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
