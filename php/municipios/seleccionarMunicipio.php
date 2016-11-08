<?php
session_start();
  $idMunicipio = ($_POST['idMunicipio']);

  if (isset($idMunicipio)) {

    include('ConsultasMunicipios.php');
    $ConsultasMunicipios = new ConsultasMunicipios;
    $consulta = 'SELECT munId, munNombre FROM municipios WHERE munId = '.$idMunicipio.' ;';
    $response = $ConsultasMunicipios -> consultaGetMunicipios($consulta);
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
