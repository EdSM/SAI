<?php
  $nombreMateria = ($_POST['nombreMateria']);

        if (isset($nombreEntidad)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO materias (matNombre, matActivo) VALUES("'.$nombreEntidad.'", 1);';
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
