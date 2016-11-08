<?php
session_start();
  $idEmplazamiento = ($_POST['idEmplazamiento']);

  if (isset($idEmplazamiento)) {
    include('ConsultasEmplazamiento.php');
    $ConsultasCultura = new ConsultasCultura;
    $consulta = 'SELECT empId, empNombre FROM emplazamientos WHERE empId = '.$idEmplazamiento.' ;';
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
