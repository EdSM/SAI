<?php
  $nombrePregunta = ($_POST['nombrePregunta']);
  $idSubtema = ($_POST['idSubtema']);
  $idCategoria = ($_POST['idCategoria']);


        if (isset($idSubtema)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO preguntas (preOracion, preActivo, preSubtema, preCategoria) VALUES("'.$nombrePregunta.'", 1, '.$idSubtema.', '.$idCategoria.');';
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
