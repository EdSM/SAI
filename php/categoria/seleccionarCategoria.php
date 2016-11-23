<?php
session_start();
  $idCategoria = ($_POST['idCategoria']);

  if (isset($idCategoria)) {

    include('ConsultasCategoria.php');
    $ConsultasCategoria = new ConsultasCategoria;
    $consulta = 'SELECT catId, catNombre FROM categorias WHERE catId = '.$idCategoria.' ;';
    $response = $ConsultasCategoria -> consultaGetCategorias($consulta);
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
