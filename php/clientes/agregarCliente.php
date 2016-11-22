<?php
  $nombre = ($_POST['nombre']);
  $nombreAnterior = ($_POST['nombreAnterior']);
  $domicilio = ($_POST['domicilio']);
  $numero = ($_POST['numero']);
  $calle = ($_POST['calle']);
  $entidad = ($_POST['entidad']);
  $telefono = ($_POST['telefono']);
  $fax = ($_POST['fax']);
  $correo = ($_POST['correo']);
  $regCamComercio = ($_POST['regCamComercio']);
  $rfc = ($_POST['rfc']);
  $infonavit = ($_POST['infonavit']);
  $historia = ($_POST['historia']);
  $estudios = ($_POST['estudios']);


        if (isset($nombre)) {

          include('../Consultas.php');
          $Consultas = new Consultas;
          $consulta = 'INSERT INTO clientes (cliNombre, cliActivo, cliNombreAnterior, cliDomicilio, cliNumero, cliCalle, cliEntidad, cliTelefono,'
          .'cliFax, cliCorreo, cliComercio, cliRfc, cliInfonavit, cliHistoria, cliEstudio)'
           .'VALUES("'.$nombre.'", 1, "'.$nombreAnterior.'", "'.$domicilio.'", "'.$numero.'", "'.$calle.'", "'.$entidad.'", "'.$telefono
           .'", "'.$fax.'", "'.$correo.'", "'.$regCamComercio.'", "'.$rfc.'", "'.$infonavit.'", "'.$historia.'", "'.$estudios.'");';
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
