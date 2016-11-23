<?php
  $nombreCategoria = ($_POST['nombreCategoria']);

        if (isset($nombreCategoria)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO categorias (catNombre, catActivo) VALUES("'.$nombreCategoria.'", 1);';
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
