<?php

  $idPregunta = ($_POST['idPregunta']);

        if (isset($idPregunta)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'DELETE FROM preguntas WHERE preId = '.$idPregunta.' ;';
        //  $Consultas -> validarSesion();
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
