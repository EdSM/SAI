<?php

  $idCultura = ($_POST['idCultura']);
  $nombreCultura = ($_POST['nombreCultura']);


        if ((isset($idCultura)) && (isset($nombreCultura))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE culturas SET culNombre = "'.$nombreCultura.'"  WHERE culId = '.$idCultura.' ;';
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
