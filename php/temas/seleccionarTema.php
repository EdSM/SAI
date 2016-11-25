<?php
session_start();
  $idTema = ($_POST['idTema']);

  if (isset($idTema)) {

    include('ConsultasTema.php');
    $ConsultasTema = new ConsultasTema;
    $consulta = 'SELECT temId, temNombre, temMateria FROM temas WHERE temId = '.$idTema.' ;';
    $response = $ConsultasTema -> consultaGetTemas($consulta);
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
