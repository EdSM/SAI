<?php

  $token = ($_POST['contactoh']);


if(isset($token)) {
  $data = array(
    'nombre' => ($_POST['nombreContacto']),
    //'postula'=> Input::get('_postula'),
    'telefono'=> ($_POST['telefonoContacto']),
    'correo'=> ($_POST['correoContacto']),
    'condiciones'=> ($_POST['condicionesContacto']),
    'mensaje'=> ($_POST['mensajeContacto']),
  );


  $timestamp = time();
  $formatoT = "d-m-Y-H:i:s-";
  $fechaT =  date($formatoT, $timestamp);
  $sufijo = "-contactenos";
  $aceptacion = $fechaT.$data['nombre'].$sufijo;

/*
   $mail = new PHPMailer;
    $nombre = "VHC_Contacto";
    $email = "VHC";
    $mensaje = "Mensaje de Contacto";

    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'difusionvhc@gmail.com';
    $mail->Password = 'dif#=216V';
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->From = $data['correo'];
    $mail->FromName = $nombre;

  //  $mail->addAddress('reclutamiento@contadoresvh.com');
    $mail->addAddress('edgar.santiago@contadoresvh.com');

  $mail->isHTML(true);
  $mail->CharSet = 'UTF-8';

  $mail->Subject = 'Mensaje de contacto desde sitio web';

  $mail->Body    ="<p><h3><strong>Mensaje desde sitio Web</strong></h3></p>".
                  "<p><strong>Nombre: </strong>".$data['nombre']."</p>".
                //  "<p><strong>Área a postularse: </strong>".$data['area']."</p>".
                  "<p><strong>Teléfono: </strong>".$data['telefono']."</p>".
                  "<p><strong>Correo: </strong>".$data['correo']."</p>".
                  "<p><strong>Mensaje: </strong>".$data['mensaje']."</p>".
                  "<p><small><strong>Política de uso y privacidad del sitio web y el Aviso de privacidad para clientes: </strong>".$aceptacion."</small></p>";



  $mail->AltBody = '';
  $exito = $mail->send();
  $intentos=1;
*/
  $para  = 'edgar.santiago@contadoresvh.com';
  $título = 'Mensaje de contacto desde sitio web';
  $mensaje = "<html>".
  "<p><h3><strong>Mensaje desde sitio Web</strong></h3></p>".
                  "<p><strong>Nombre: </strong>".$data['nombre']."</p>".
                //  "<p><strong>Área a postularse: </strong>".$data['area']."</p>".
                  //"<p><strong>Teléfono: </strong>".$data['telefono']."</p>".
                  "<p><strong>Correo: </strong>".$data['correo']."</p>".
                  "<p><strong>Mensaje: </strong>".$data['mensaje']."</p>".
                  "<p><small><strong>Política de uso y privacidad del sitio web y el Aviso de privacidad para clientes: </strong>".$aceptacion."</small></p>".
                  "</html>";
  $cabeceras  = 'MIME-Version: 1.0' . "\r\n";
  $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";

  $exito =mail($para, $título, $mensaje, $cabeceras);
  $intentos=1;

  while ((!$exito) && ($intentos < 5)) {
    sleep(5);
    //$exito = $mail->send();
    $exito =mail($para, $título, $mensaje, $cabeceras);
    $intentos=$intentos+1;
  }
  if(!$exito){
    $response = array(
      'status' => 'ERROR',
      'message' => 'Gracias por ponerse en contacto con nosotros.'
    );
  }
  else{
    $response = array(
      'status' => 'OK',
      'message' => 'Su información se envío correctamente.'
    );
  }
  $jsonFinal = json_encode($response);
  echo $jsonFinal;

}
