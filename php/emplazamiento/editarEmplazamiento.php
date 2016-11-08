<?php

  $idEmplazamiento = ($_POST['idEmplazamiento']);
  $nombreEmplazamiento = ($_POST['nombreEmplazamiento']);


        if ((isset($idEmplazamiento)) && (isset($nombreEmplazamiento))) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'UPDATE emplazamientos SET empNombre = "'.$nombreEmplazamiento.'"  WHERE empId = '.$idEmplazamiento.' ;';
          $Consultas -> validarSesion();
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
