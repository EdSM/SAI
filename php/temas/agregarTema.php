<?php
  $nombreTema = ($_POST['nombreTema']);
  $materiaTema = ($_POST['materiaTema']);

        if (isset($nombreTema)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO temas (temNombre, temActivo, temMateria) VALUES("'.$nombreTema.'", 1, "'.$materiaTema.'");';
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
