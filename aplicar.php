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
  <div class="row" id="seleccionarClienteCuestionario">
    <div class="col-md-2 transladarIzquierda paddingTexto well">

           <?php include("secciones/menuCuestionario.php") ?>

     </div>

    <div class="col-md-6">

      <div class="form-group">
          <label for="slctNombreRev" class="col-md-4 control-label text-right">Seleccionar cliente:</label>
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


    <div class="col-md-12 text-center">
        <button type="button" name="button" class="btn btn-md btn-primary" id="btnAplicar">Aplicar cuestionario</button>
    </div>

    </div>
  </div>




  <div class=" hidden" id="pnlCheck">
    <div class="row">
      <div class="col-md-12">
        <h3 class="text-center" id="titulo"></h3>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12 text-right">
        <small>Preguntas contestadas:&nbsp;&nbsp;&nbsp; </small> <label><span id="badgeNP" class="badge">0</span></label>&nbsp;&nbsp;&nbsp;
        <small>Total: &nbsp;&nbsp;&nbsp; </small> <label><span class="badge">20</span></label>
      </div>

    </div>
    <br>
    <table class="table table-striped table-bordered table-condensed">
      <tbody class="">
        <tr>


      <div class="row">
        <div class="col-md-10 col-xs-12 text-justify">
          <p class="animEscalarSimple formatoTexto4" id="pregunta">
          </p>
        </div>
        <div class="col-md-1 col-xs-6 text-center">
          <div class="radio">
            <label>
              <input type="radio" name="pre0" id="preSi0" value="1">
              Sí
            </label>
          </div>
        </div>

        <div class="col-md-1 col-xs-6">
          <div class="radio">
            <label>
              <input type="radio" name="pre0" id="preNo0" value="0">
              No
            </label>
          </div>
        </div>
      </div>
      </tr>

      <tr>
      <div class="row">
        <div class="col-md-10 col-xs-12 text-justify">
          <p class="animEscalarSimple formatoTexto4" id="pregunta1">
          </p>
        </div>
        <div class="col-md-1 col-xs-6 text-center">
          <div class="radio">
            <label>
              <input type="radio" name="pre1" id="preSi1" value="1">
              Sí
            </label>
          </div>
        </div>

        <div class="col-md-1 col-xs-6">
          <div class="radio">
            <label>
              <input type="radio" name="pre1" id="preNo1" value="0">
              No
            </label>
          </div>
        </div>
      </div>
      </tr>

      <tr>
      <div class="row">
        <div class="col-md-10 col-xs-12 text-justify">
          <p class="animEscalarSimple formatoTexto4" id="pregunta2">
          </p>
        </div>
        <div class="col-md-1 col-xs-6 text-center">
          <div class="radio">
            <label>
              <input type="radio" name="pre2" id="preSi2" value="1">
              Sí
            </label>
          </div>
        </div>

        <div class="col-md-1 col-xs-6">
          <div class="radio">
            <label>
              <input type="radio" name="pre2" id="preNo2" value="0">
              No
            </label>
          </div>
        </div>
      </div>
     </tr>

     <tr>
      <div class="row">
        <div class="col-md-10 col-xs-12 text-justify">
          <p class="animEscalarSimple formatoTexto4" id="pregunta3">
          </p>
        </div>
        <div class="col-md-1 col-xs-6 text-center">
          <div class="radio">
            <label>
              <input type="radio" name="pre3" id="preSi3" value="1">
              Sí
            </label>
          </div>
        </div>

        <div class="col-md-1 col-xs-6">
          <div class="radio">
            <label>
              <input type="radio" name="pre3" id="preNo3" value="0">
              No
            </label>
          </div>
        </div>
      </div>
      </tr>

      <tr>
      <div class="row">
        <div class="col-md-10 col-xs-12 text-justify">
          <p class="animEscalarSimple formatoTexto4" id="pregunta4">
          </p>
        </div>
        <div class="col-md-1 col-xs-6 text-center">
          <div class="radio">
            <label>
              <input type="radio" name="pre4" id="preSi4" value="1">
              Sí
            </label>
          </div>
        </div>

        <div class="col-md-1 col-xs-6">
          <div class="radio">
            <label>
              <input type="radio" name="pre4" id="preNo4" value="0">
              No
            </label>
          </div>
        </div>
      </div>
      </tr>
    </tbody>
    </table>

    <div class="row">
      <br>
      <div class="col-md-5 col-md-offset-3">
        <button id="btnContinuar" class="btn btn-md btn-primary btn-block" ><i class="fa fa-chevron-circle-right"></i> Continuar</span></button>
      </div>
    </div>
  </div>




    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="datepicker/js/bootstrap-datepicker.js"></script>
    <script src="js/aplicar.js"></script>

</body>
</html>
