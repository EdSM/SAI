<?php
  session_start();
  unset($_SESSION["tipo"]);
  unset($_SESSION["id"]);
  unset($_SESSION["especial"]);
  unset($_SESSION["nombre"]);

  session_destroy();
  header("Location: ../../index.php");
  exit;
?>
