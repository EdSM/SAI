<?php
$nombre   = ($_POST['nombre']);
$idCultura = ($_POST['idCultura']);
$regInah   = ($_POST['regInah']);
$regVhc    = ($_POST['regVhc']);
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
$sitId      =($_POST['idSitio']);

        if (isset($sitId))  {

          include('../Consultas.php');
          $Consultas = new Consultas;


          $sqlValues = " UPDATE sitios SET sitNombre= '".$nombre."', sitCulturas=".$idCultura.", sitRegInah='".$regInah."', sitRegVhc='".$regVhc."', sitMunicipios='".$idMunicipio."', sitArea='".$area."', sitEmplazamiento='".$emplazamiento."', sitActividades='".$actividades."', sitOcupacion='".$ocupacion."', sitHistoria='".$historia."', sitTuristica='".$turistica."', sitActividadTuristica='".$acTuristica."',   sitPublico=".$publico.", sitClave='".$clave."', sitMapa='".$mapa."' ";

          $sqlWhere = " WHERE sitId= ".$sitId.";";


          $consulta = $sqlValues.$sqlWhere;
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
