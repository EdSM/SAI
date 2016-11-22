<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="author" content="" />
  <link rel="icon" type="image/png" href="img/favicon.png"/>

  <title>
      Sistema Auditoría Intrgral
  </title>

  <link rel="stylesheet" href="css/bootstrap.min.css" charset="utf-8">
  <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css">
  <link rel="stylesheet" href="datepicker/css/bootstrap-datepicker3.standalone.css">
  <link href="css/landing-page.css" rel="stylesheet">

</head>

<body data-spy="scroll" id="page-top">
<br><br>
  <div class="row">
    <div class="col-md-2 transladarIzquierda paddingTexto well">

           <?php include("secciones/menuCuestionario.php") ?>

     </div>

    <div class="col-md-6">

      <div class="form-group">
          <label for="slctNombreRev" class="col-md-4 control-label text-right"> Cliente:</label>
            <div class="col-md-8">
              <select name="" id="slcCliente" class="form-control input-sm">
            </select>
          </div>
      </div>
      
      <br><br>
      <div class="form-group">
          <label for="slctNombreRev" class="col-md-4 control-label text-right"> Cuestionario:</label>
            <div class="col-md-8">
              <select name="" id="slcCuestionario" class="form-control input-sm">
            </select>
          </div>
      </div>

      <br><br>

      <div class="form-group" id="groupNueva1">
      <label for="txtFechaInicio" class="col-md-4 control-label text-right">Fecha de aplicación: </label>
      <div class="col-md-5">

        <div class="input-group date" data-provide="datepicker">
          <input type="text" class="form-control" id="txtFecha">
          <div class="input-group-addon">
            <i class="fa fa-calendar"></i>
          </div>
        </div>

      </div>
    </div>
    <br><br>
    <div class="col-md-12 text-center">
        <button type="button" name="button" class="btn btn-md btn-primary" id="btnAsignar">Asignar cuestionario</button>
    </div>

    </div>
  </div>


    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="datepicker/js/bootstrap-datepicker.js"></script>
    <script src="js/index.js"></script>

</body>
</html>
