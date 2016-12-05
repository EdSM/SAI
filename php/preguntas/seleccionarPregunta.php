<?php

  $idPregunta = ($_POST['idPregunta']);

  if (isset($idPregunta)) {

    include('ConsultasPregunta.php');
    $ConsultasPregunta = new ConsultasPregunta; //'.$idPregunta.'
    $consulta = 'SELECT preId, preOracion, preSubtema, preCategoria, preLista1 FROM preguntas WHERE preId = '.$idPregunta.' ;';
    $response = $ConsultasPregunta -> consultaGetPreguntaRespuestaC($consulta);
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
