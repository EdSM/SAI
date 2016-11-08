<?php
include('../Conexion.php');

$usuario=($_POST['usuario']);
$pass=($_POST['pass']);

if(( isset( $usuario ) ) && (isset( $pass ))){
  $ConexionBD = new Conexion;
  $database = $ConexionBD->conectarBD();

  if($database->connect_errno) {
    $response = array(
        'status' => 'ERROR',
        'message' => 'No se puede conectar a la base de datos'
      );
   }
  else{

/*
      $admIn = 0;                                                   //consulta  ************
      $querySelect='SELECT usuId, usuCorreo, usuPass, usuNombre ';
      $queryFrom=' FROM usuarios ';
      $queryWhere=' WHERE usuCorreo="'.$usuario.'" AND usuTipo=2; ';

      $idInt;
      $nombreInt;
      $passInt;

      $consulta=$querySelect.$queryFrom.$queryWhere;

      if ( $result = $database->query($consulta) ) {

        while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
          $idInt     = $row['usuId'];
          $nombreInt = $row['usuNombre'];
          $passInt   = $row['usuPass'];
        }

        if ( !strcmp($pass, $passInt) ){
          session_start();
          $_SESSION["tipo"] = '100';
          $_SESSION["id"] = $idInt;
          $_SESSION["nombre"] = $nombreInt;
          echo $_SESSION["nombre"];
          header("Location: ../../busqueda/busquedas.php");
          return true;
        }

      }



    $admVH = 0;                                               //Captura *********
    $querySelect='SELECT usuId, usuCorreo, usuPass, usuNombre ';
    $queryFrom=' FROM usuarios ';
    $queryWhere=' WHERE usuCorreo="'.$usuario.'" AND usuTipo=1; ';

    $idRes;
    $nombreRes;
    $passRes;

    $consulta=$querySelect.$queryFrom.$queryWhere;

    if ( $result = $database->query($consulta) ) {
      while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
        $idRes       = $row['usuId'];
        $nombreRes   = $row['usuNombre'];
        $passRes     = $row['usuPass'];
      }
      if ( !strcmp($pass, $passRes) ){
        session_start();
        $_SESSION["tipo"] = '010';
        $_SESSION["id"] = $idRes;
        $_SESSION["nombre"] = $nombreRes;
        header("Location: ../../captura/inicioCaptura.php");
        return true;
      }

    }
*/


        $admVH = 0;                                               //ADM*******************************
        $querySelect='SELECT usuId, usuCorreo, usuPass ';
        $queryFrom=' FROM usuarios ';
        $queryWhere=' WHERE usuCorreo="'.$usuario.'" AND usuTipo=0 AND usuActivo=1; ';

        $idAdm;
        $passAdm;

        $consulta=$querySelect.$queryFrom.$queryWhere;
        if ( $result = $database->query($consulta) ) {
          while($row = mysqli_fetch_array($result, MYSQL_BOTH)) {
            $idAdm   = $row['usuId'];
            $passAdm = $row['usuPass'];
          }

          if ( !strcmp($pass, $passAdm) ){
            session_start();
            $_SESSION["tipoNem"] = '001';
            $_SESSION["idNem"] = $idAdm;
            $_SESSION["nombreNem"] = 'Administrador';
            header("Location: ../../admin/inicioAdm.php");
            return true;
          }
          else {
              header("Location: ../../index.php");
          }
        }
        else {
          header("Location: ../../index.php");
          //echo $database->error;
        }

  }
}
