
<!DOCTYPE html>
<html lang="es">

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="author" content="edSantiago" />
    <link rel="icon" type="../../image/png" href="./favicon.png"/>

    <title>      Servicios Laborales | Vázquez Hernández Contadores, S. C.
      </title>

    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet">
  <!--    <link href="css/lib/sweet-alert.css" rel="stylesheet">
-->
  <!--    <link href="../../css/publicos/pagina.css" rel="stylesheet">
  -->
  </head>

  <body>


<!--      <?php include ("../../seccionesVista/barraNavegacionPagina.php"); ?>
-->

<div style="background-image:url('../../img/inicio/478771527.jpg');"class="fondo paddingTexto">
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <br>
        <h1 class="tituloEntrada tamTitulo grisObscuro texto3d"><i class="fa fa-pencil-square-o"></i> Diagnóstico</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">

        <div class="well trasparenteClaroPlus animacionContenido hidden" id="pnlCheck">
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
          <table class="table">
            <tbody>
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

        <div class="well trasparenteClaroPlus animacionContenido hidden" id="pnlResultado">
          <div class="row">
            <div class="col-md-12">
              <div class="progress progress-striped active">
                <div class="progress-bar progress-bar-danger" style="width: 0%" id="barDanger">
                </div>
                <div class="progress-bar progress-bar-warning" style="width: 0%" id="barWarning">
                </div>
                <div class="progress-bar progress-bar-success" style="width: 0%" id="barSuccess">
                </div>
              </div>
            </div>
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="col-md-4 col-sm-4 col-xs-4 text-left">
                <strong><small>0%</small></strong>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 text-center">
                <strong><small>50%</small></strong>
              </div>
              <div class="col-md-4 col-sm-4 col-xs-4 text-right">
                <strong><small>100%</small></strong>
              </div>
            </div>
            <div class="col-md-12 text-center">
                            <p class="animEscalarSimple formatoTexto4" id="txtResultado">
              </p>
              <br>
              <div class="row">
                <div class="col-md-2">
                </div>
                <div class="col-md-4">
                  <button id="btnSiguiente" class="btn btn-lg btn-primary btn-block" ><i class="fa fa-chevron-right"></i> Siguente evaluación</span></button>
                </div>
                <div class="col-md-4">
                  <button id="btnSalir" class="btn btn-lg btn-primary btn-block" ><i class="fa fa-sign-out"></i> Finalizar</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>  <!-- Well -->

        <div class="well trasparenteClaroPlus animacionContenido " id="pnlDatos">

        </div>

      </div>

    <!--   <div class="col-md-3 transladarIzquierda paddingTexto">

            <ul id="ulIntegrate"class="nav nav-sidebar colorNav" >
              <li id="liCondGT" style="cursor:pointer">
                  <a class="grisClaro texto3d" >
                    <i class="fa fa-suitcase"></i> Condiciones generales de trabajo</a>
              </li>
                <li id="liCapAdi">
                    <a class="grisClaro texto3d" style="cursor:pointer">
                      <i class="fa fa-male"></i> Capacitación y adiestramiento.
                    </a>
                </li>
                <li id="liSegHig" style="cursor:pointer">
                    <a class="grisClaro texto3d">
                      <i class="fa fa-medkit"></i> Seguridad e higiene
                    </a>
                </li>
            </ul>
            <br>
            <a class="btn btn-md btn-primary btn-block" href="javascript:history.back()"><i class="fa fa-chevron-left"></i> Regresar</span></a>

      </div>
 -->



    </div>


    <div class="row">
      <div class="col-md-2 col-md-offset-10 col-lg-2 col-lg-offset-10 transladarIzquierda">

      </div>
    </div>

  </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<!--    <script src="../../js/lib/sweet-alert.min.js"></script>
 -->
<script src="js/cuestionario.js"></script>


  <script>
  	$('#navServicios').addClass('activoLi');
  </script>

  </body>

</html>
