<?php
  $nombreSubtema = ($_POST['nombreSubtema']);
  $idTema = ($_POST['idTema']);

        if (isset($nombreSubtema)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO subtemas (subNombre, subActivo, subTema) VALUES("'.$nombreSubtema.'", 1, "'.$idTema.'");';
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
