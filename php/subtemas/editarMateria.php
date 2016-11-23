<?php

  $idMateria = ($_POST['idMateria']);
  $nombreMateria = ($_POST['nombreMateria']);


        if ((isset($idMateria)) && (isset($nombreMateria))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE materias SET matNombre = "'.$nombreMateria.'"  WHERE matId = '.$idMateria.' ;';
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
