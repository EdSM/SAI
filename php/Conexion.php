<?php
class Conexion{
  public function conectarBD(){
    $hostname = "localhost";
    $usuario = "root";
    $password = "root";
    $basededatos = "auditoria_integral";


    $database = new mysqli($hostname, $usuario, $password, $basededatos);
    $database->set_charset('utf8');
    return($database);
  }

  public function desconectarDB($conexion){
      $close = mysqli_close($conexion);
          if(!$close){
              echo 'Ha sucedido un error en la desconexion de la base de datos  ';
          }
      return $close;
  }

}
?>
