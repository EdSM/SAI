<?php

  $idTema = ($_POST['idTema']);

        if (isset($idTema)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'DELETE FROM temas WHERE temId = '.$idTema.' ;';
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
