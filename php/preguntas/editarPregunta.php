<?php
  $idPregunta = ($_POST['idPregunta']);
  $idSubtema = ($_POST['idSubtema']);
  $idCategoria = ($_POST['idCategoria']);
  $pregunta = ($_POST['pregunta']);
  $idLista1 = ($_POST['idLista1']);


        if ((isset($idSubtema)) && (isset($idCategoria)) && (isset($pregunta)) && (isset($idLista1)) && (isset($idPregunta))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE preguntas SET preOracion = "'.$pregunta.'", preSubtema='.$idSubtema.', preCategoria='.$idCategoria.', preLista1='.$idLista1.'  WHERE preId = '.$idPregunta.' ;';
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
