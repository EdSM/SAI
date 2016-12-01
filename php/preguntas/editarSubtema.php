<?php

  $idSubtema = ($_POST['idSubtema']);
  $nombreSubtema = ($_POST['nombreSubtema']);
  $idTema = ($_POST['idTema']);


        if ((isset($idSubtema)) && (isset($nombreSubtema))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE subtemas SET subNombre = "'.$nombreSubtema.'", subTema="'.$idTema.'"  WHERE subId = '.$idSubtema.' ;';
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
