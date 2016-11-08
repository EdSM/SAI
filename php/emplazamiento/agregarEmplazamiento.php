<?php
  $nombreEmplazamiento = ($_POST['nombreEmplazamiento']);

        if (isset($nombreEmplazamiento)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO emplazamientos (empNombre) VALUES("'.$nombreEmplazamiento.'");';
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
