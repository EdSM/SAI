<?php
class Consultas {
  private $validarAdmin = false;
  private $sesion;
  private $ConexionBD;


  public function establecerConexion(){
    include('Conexion.php');
    $ConexionBDatos = new Conexion;
    return $ConexionBDatos;
  }

  public function validarSesion(){
    $sesion = session_start();
    if ((isset($_SESSION["tipoNem"])) && (isset($_SESSION["idNem"])) && (isset($_SESSION["nombreNem"])) ) {
          $tipoSesion   = $_SESSION["tipoNem"];
          $idSesion     = $_SESSION["idNem"];
          $nombreSesion = $_SESSION["nombreNem"];

          include('../sesion/ValidarSesion.php');
          $ValidaSesion = new ValidaSesion;
          $validar =  $ValidaSesion->isAdmin($tipoSesion, $nombreSesion, $idSesion);
          $this->validarAdmin = $validar;
          $this -> ConexionBD = $this->establecerConexion();
        }
      else{
          $this->validarAdmin = false;
      }
  }

  public function consultaInsertEditEliminar($consulta) {
      //  $this->validarSesion();
      //  if ($this->validarAdmin) {

                      /****************************Consulta despues de validar *************/
                      $this -> ConexionBD = $this->establecerConexion();

            $database = $this-> ConexionBD->conectarBD();

            if($database->connect_errno) {
              $response = array(
                  'status' => 'ERROR',
                  'message' => 'No se puede conectar a la base de datos'
                );
             }
             else{
               if ( $result = $database->query($consulta) ) {
                 $response = array(
                         'status' => 'OK',
                         'message' => 'Consulta realizada con exito'
                       );
              } else {
                $response = array(
                    'status' => 'ERROR',
                    'message' => $database->error
                  );
              }
              $this -> ConexionBD->desconectarDB($database);
            }

                            /**************************** /Consulta despues de validar *************/

  /*    }else {     // $validarAdmin
        $response = array(
          'status' => 'ERROR',
          'message'=>'Verifique que su sesión sea administrador'
        );
      }*/

    return $response;
  }

}
?>
