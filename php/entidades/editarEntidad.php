<?php

  $idEntidad = ($_POST['idEntidad']);
  $nombreEntidad = ($_POST['nombreEntidad']);


        if ((isset($idEntidad)) && (isset($nombreEntidad))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE entidades SET entNombre = "'.$nombreEntidad.'"  WHERE entId = '.$idEntidad.' ;';
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
