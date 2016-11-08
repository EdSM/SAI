<?php

  $idCultura = ($_POST['idCultura']);

        if (isset($idCultura)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'DELETE FROM culturas WHERE culId = '.$idCultura.' ;';
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
