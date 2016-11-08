<?php
class Conexion{
  public function conectarBD(){
    $hostname = "localhost";
    $usuario = "root";
    $password = "root";
    $basededatos = "nemachtiloprueba";



  /*  $hostname = "db600421091.db.1and1.com";
    $usuario = "dbo600421091";
    $password = "z4obr81s";
    $basededatos = "db600421091";
*/
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
