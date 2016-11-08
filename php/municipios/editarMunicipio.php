<?php

  $idMunicipio = ($_POST['idMunicipio']);
  $nombreMunicipio = ($_POST['nombreMunicipio']);


        if ((isset($idMunicipio)) && (isset($nombreMunicipio))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE municipios SET munNombre = "'.$nombreMunicipio.'"  WHERE munId = '.$idMunicipio.' ;';
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
