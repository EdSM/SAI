<?php
session_start();
  $idMateria = ($_POST['idMateria']);

  if (isset($idMateria)) {

    include('ConsultasMateria.php');
    $ConsultasMateria = new ConsultasMateria;
    $consulta = 'SELECT matId, matNombre FROM materias WHERE matId = '.$idMateria.' ;';
    $response = $ConsultasMateria -> consultaGetMaterias($consulta);
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
