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
  <link href="libreria/sweetAlert/sweetalert.css" rel="stylesheet">
  <link href="css/landing-page.css" rel="stylesheet">

</head>


  <body>
    <?php session_start(); ?>
      <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header ">

        </div>

          <ul class="nav navbar-nav navbar-right">
            <li> <!--   {{ HTML::link('/inicio2', 'Sesión representante:' ) }}  --></li>
              <li> <!--   {{ HTML::link('/inicio2', Session::get('nombre')) }} --></li>
            <li class="dropdown">
              <!--    <a style="cursor:pointer" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-clock-o"></i> Historial<b class="caret"></b></a> -->

             </li>

            <li class="dropdown">
              <a style="cursor:pointer" class="dropdown-toggle" data-toggle="dropdown"><span class="glyphicon glyphicon-cog "></span> <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li>
                  <a href="../php/sesion/logout.php" id="aSalir"><i class="fa fa-sign-out"></i> Cerrar sesión</a>
                </li>
              </ul>
             </li>
          </ul>

        </div>
      </nav>

      <div class="paddingMenu fondo"> <!-- fondo -->

        <div>
        <br><br>
          <div class="row"> <!-- Renglon Principal *******************************************************************-->
            <input type="text" class="hidden" value="" id="txtFinalizar">
            <input type="text" class="hidden" value="" id="txtIdPeriodo">
            <div class="col-md-2" id="responsableMenu">

              <aside>
                    <?php include("secciones/menuCuestionario.php") ?>

              </aside>
              <br><br>
            <!--     <button class="btn btn-block btn-md btn-success" id="btnSalir"> <h4> <i class="fa fa-sign-out"></i> Salir</button> </h4>
-->
            </div>

            <div class="col-md-10">

              <div id="contenidoUsuario">

            <!-- ******************************************************** -->

            <div class="well" id="frmAgregar">
        <div class="form-horizontal" >
          <fieldset>
            <legend><span class="glyphicon glyphicon-plus text-primary"></span> Agregar Preguntas</legend>

            <div class="form-group">
              <label for="slctMateria" class="col-md-2 control-label">Seleccionar materia:</label>
              <div class="col-md-10">
                <select name="" id="slcMateria" class="form-control input-sm">
                  </select>
              </div>
            </div>

            <div class="form-group">
              <label for="slctMateria" class="col-md-2 control-label">Seleccionar tema:</label>
              <div class="col-md-10">
                <select name="" id="slcTema" class="form-control input-sm">
                  </select>
              </div>
            </div>

            <div class="form-group">
              <label for="txtNombreRev" class="col-md-2 control-label"> Seleccionar subtema:</label>
              <div class="col-md-10">
                <select name="" id="slcSubtema" class="form-control input-sm">
                  </select>
              </div>
            </div>

            <div class="form-group">
              <label for="txtNombreRev" class="col-md-2 control-label"> Seleccione categoría de pregunta:</label>
              <div class="col-md-10">
                <select name="" id="slcCategoria" class="form-control input-sm">
                  </select>
              </div>
            </div>


            <div class="form-group">
              <label for="txtNombreRev" class="col-md-2 control-label"> Pregunta:</label>
              <div class="col-md-10">
                <input type="text" class="form-control input-sm" id="txtPregunta" placeholder="Nombre de la materia" maxlength="500" spellcheck="true">
              </div>
            </div>

            <br>
            <hr>
            <br>
            <div class="row">
                <label for="txtNombreRev" class="col-md-12"> Tipo de respuesta para la pregunta:</label>
              <div class="col-md-6">
                <div class="form-group text-center">
                  <label><input type="radio" name="rdoRespuesta" value="1"> Cuadro de texto abierto y opción NA:</label>
                  <br><br>
                  <div class="row">
                    <div class="col-md-4">
                      <label class="checkbox-inline"><input type="checkbox" id="chkRespuesta" value="">No aplica</label>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control input-sm" id="txtRespuesta" placeholder="Respuesta" maxlength="500" spellcheck="true">
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group text-center">
                  <label><input type="radio" name="rdoRespuesta" value="2"> Lista cerrada: SI/NO/NA</label>.
                  <br><br>
                  <div class="col-md-2 col-md-offset-4">
                    <select name="" id="slcCategoria" class="form-control input-sm">
                      <option value="0">SI</option>
                      <option value="0">NO</option>
                      <option value="0">NO APLICA</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            <hr>

            <div class="form-group">
              <div class="col-md-9 col-md-offset-3">
                <div class="row">
                  <div class="col-md-4">
                      <button class="btn btn-primary btn-md" id="btnAgregar"><span class="glyphicon glyphicon-floppy-disk"></span> Agregar</button>
                  </div>
                  <!--  <div class="col-md-4">
                      <button class="btn btn-primary btn-md" id="btnLimpiar"><i class="fa fa-eraser" aria-hidden="true"></i> Limpiar</button>
                  </div>
                  -->
                  <div class="col-md-4">
                      <button class="btn btn-danger btn-md" id="btnLimpiar"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
                  </div>
                </div>
                <input type="hidden" name="_token" id="_token" >
              </div>
            </div>
          </fieldset>
        </div>
      </div>  <!-- /well -->


      <div class="well hidden" id="formEditar">
  <div class="form-horizontal" >
    <fieldset>
      <legend><i class="fa fa-pencil-square-o text-primary" aria-hidden="true"></i> Editar subtema</legend>

      <div class="form-group">
        <label for="txtNombreRev" class="col-md-2 control-label"> Nombre del subtema:</label>
        <div class="col-md-10">
          <input type="text" class="form-control input-sm" id="txtSubtemaE" placeholder="Ingrese tema" maxlength="500" spellcheck="true">
        </div>
      </div>

      <div class="form-group">
        <label for="slctMateria" class="col-md-2 control-label"> Tema:</label>
        <div class="col-md-10">
          <select name="" id="slcTemaE" class="form-control input-sm">
            </select>
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-9 col-md-offset-3">
          <button class="btn btn-primary btn-sm" id="btnAgregarE"><span class="glyphicon glyphicon-floppy-disk"></span> Guardar</button>
          <button class="btn btn-danger btn-sm" id="btnCancelarE"><span class="glyphicon glyphicon-remove-sign"></span> Cancelar</button>
          <input type="hidden" name="idSubtemaE" id="idSubtemaE" >
        </div>
      </div>
    </fieldset>
  </div>
</div>  <!-- /well -->



      <div class="row" id="tblRegistros">
        <div class="col-md-12">
          <h3>Subtemas registradas:</h3>
          <div class="table-responsive" id="tblServicios">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th class="">No.</th>
                  <th class="">Id</th>
                  <th class="col-md-6">Preguntas</th>
                  <th class="col-md-2">Subtema</th>
                  <th class="col-md-2">Categoría</th>
                  <th class="col-md-1 text-center">Modificar</th>
                  <th class="col-md-1 text-center">Eliminar</th>
                <!--    <th class="col-md-1">Eliminar</th> -->
                </tr>
              </thead>
              <tbody id="tbodyRegistros"></tbody>
            </table>
          </div>
        </div>
      </div> <!-- /Tabla servicios -->

  <!-- ******************************************************** -->

              <div class="row">
                <input type="hidden" name="idSesion" id="idSesion" value="<?php echo $_SESSION['idNem']; ?>">
              </div>

              <div class="row">

              </div>

        </div> <!-- /Renglon Principal -->
        </div>  <!-- /Container -->
      </div>

      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.easing.min.js"></script>
      <script src="datepicker/js/bootstrap-datepicker.js"></script>
       <script src="libreria/sweetAlert/sweetalert.min.js"></script>
      <script src="js/preguntas.js"></script>
  <script>
    //$('#collapseContenidos').addClass('in');
    $('#caIngresar').addClass('activoBorde');
  </script>

  </body>

</html>
