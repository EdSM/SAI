<?php

  $idCategoria = ($_POST['idCategoria']);
  $nombreCategoria = ($_POST['nombreCategoria']);


        if ((isset($idCategoria)) && (isset($nombreCategoria))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE categorias SET catNombre = "'.$nombreCategoria.'"  WHERE catId = '.$idCategoria.' ;';
        //  $Consultas -> validarSesion();
          $response = $Consultas -> consultaInsertEditEliminar($consulta);
        }
        else {
            $response = array(
              'status' => 'ERROR',
              'message'=>'Faltan parámetros al solicitar petición'
            );
        }

  $jsonFinal = json_encode($response);
  echo $jsonFinal;

?>
