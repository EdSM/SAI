<?php
  $nombreCueationario = ($_POST['nombreCuestionario']);

        if (isset($nombreCueationario)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO cuestionarios (cueNombre, cueActivo) VALUES("'.$nombreCueationario.'", 1);';
          //$Consultas -> validarSesion();
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
