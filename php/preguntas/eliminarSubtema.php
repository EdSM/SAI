<?php

  $idSubtema = ($_POST['idSubtema']);

        if (isset($idSubtema)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'DELETE FROM subtemas WHERE subId = '.$idSubtema.' ;';
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
