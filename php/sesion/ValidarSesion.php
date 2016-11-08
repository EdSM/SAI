<?php
class ValidaSesion
{
  public function isAdmin($tipoSesion, $nombreSesion, $idSesion) {
      $validar = false;
      if (($tipoSesion == '001') && ($nombreSesion == 'Administrador') && ($idSesion != 0)) {
        $validar = true;
      }
      else {
        $validar = false;
      }
      return $validar;
  }

}
?>
