<?php

  $idSubtema = ($_POST['idSubtema']);

  if (isset($idSubtema)) {

    include('ConsultasSubtemas.php');
    $ConsultasSubtemas = new ConsultasSubtemas;
    $consulta = 'SELECT subId, subNombre, subTema FROM subtemas WHERE subId = '.$idSubtema.' ;';
    $response = $ConsultasSubtemas -> consultaGetSubtemas($consulta);
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
