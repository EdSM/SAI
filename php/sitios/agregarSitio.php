<?php
  $nombre   = ($_POST['nombre']);
  $idCultura = ($_POST['idCultura']);
  $regInah   = ($_POST['regInah']);
  $regVhc    = ($_POST['regVhc']);
  $idEstado  = ($_POST['idEstado']);
  $idMunicipio= ($_POST['idMunicipio']);
  $area      = ($_POST['area']);
  $emplazamiento= ($_POST['emplazamiento']);
  $actividades = ($_POST['actividades']);
  $ocupacion   = ($_POST['ocupacion']);
  $historia    = ($_POST['historia']);
  $turistica   = ($_POST['turistica']);
  $acTuristica = ($_POST['acTuristica']);
  $publico     = ($_POST['publico']);
  $clave       = ($_POST['clave']);
  $mapa        = ($_POST['mapa']);

        if ((isset($nombre)) && (isset($idCultura)) && (isset($regInah)) && (isset($regVhc)) && (isset($idEstado)) && (isset($idMunicipio)) && (isset($area)) &&
         (isset($emplazamiento)) && (isset($actividades)) && (isset($ocupacion)) && (isset($historia)) && (isset($turistica)) && (isset($acTuristica)) && (isset($publico)) && (isset($clave)) && (isset($mapa))  ) {

          include('../Consultas.php');
          $Consultas = new Consultas;

          $sqlInsert ="insert into sitios (sitNombre,  	sitCulturas,   	sitRegInah,   	sitRegVhc,  	sitEstado,      	sitMunicipios,     	sitArea,	    sitEmplazamiento,    	sitActividades,	      sitOcupacion,   	sitHistoria,  	sitTuristica,	  sitActividadTuristica,	sitPublico,	sitClave,	  sitMapa) ";
          $sqlValues = "values (       '".$nombre."', ".$idCultura.", '".$regInah."', '".$regVhc."', '".$idEstado."', '".$idMunicipio."', '".$area."', '".$emplazamiento."', '".$actividades."', '".$ocupacion."', '".$historia."', '".$turistica."', '".$acTuristica."',    ".$publico.", '".$clave."', '".$mapa."' );  ";

          $consulta = $sqlInsert.$sqlValues;
          $Consultas -> validarSesion();
          $response = $Consultas -> consultaInsertEditEliminar($consulta);
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
