<?php
session_start();
  $idSitio = ($_POST['idSitio']);

  if (isset($idSitio)) {

    include('ConsultasSitios.php');
    $ConsultasSitio = new ConsultasSitios;
    $consulta = 'SELECT sitId, sitNombre, sitCulturas, sitRegInah, sitRegVhc, sitEstado,	sitMunicipios,     	sitArea,	    sitEmplazamiento,    	sitActividades,	      sitOcupacion,   	sitHistoria,  	sitTuristica,	  sitActividadTuristica,	sitPublico,	sitClave, sitMunicipios,  sitMapa FROM sitios WHERE sitId = '.$idSitio.' ;';
    $response = $ConsultasSitio -> consultaSeleccionarSitio($consulta);
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
