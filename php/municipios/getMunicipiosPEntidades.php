<?php

  $idEntidad = ($_POST['idEntidad']);

  if (isset($idEntidad)) {

    include('ConsultasMunicipios.php');
    $ConsultasMunicipios = new ConsultasMunicipios;
    $consulta = 'SELECT munId, munNombre FROM municipios WHERE munEntidad = '.$idEntidad.' ;';
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
