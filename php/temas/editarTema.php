<?php

  $idTema = ($_POST['idTema']);
  $nombreTema = ($_POST['nombreTema']);
  $idMateria = ($_POST['idMateria']);


        if ((isset($idTema)) && (isset($nombreTema))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE temas SET temNombre = "'.$nombreTema.'", temMateria="'.$idMateria.'"  WHERE temId = '.$idTema.' ;';
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
