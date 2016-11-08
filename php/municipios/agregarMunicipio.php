<?php
  $nombreMunicipio = ($_POST['nombreMunicipio']);
  $idEntidad = ($_POST['idEntidad']);

        if (isset($nombreMunicipio)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO municipios (munNombre, munEntidad) VALUES("'.$nombreMunicipio.'", '.$idEntidad.');';
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
