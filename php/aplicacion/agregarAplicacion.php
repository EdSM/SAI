<?php
  $idCliente = ($_POST['idCliente']);
  $idCuestionario = ($_POST['idCuestionario']);
  $fecha = ($_POST['fecha']);

        if (isset($idCliente)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO aplicacion (aplClientes, aplCuestionarios, aplFechaAplicacion) VALUES('.$idCliente.', '.$idCuestionario.', "'.$fecha.'");';
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
