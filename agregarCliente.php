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

    <div class="col-md-10">

      <div class="form-group">
          <label for="txtNombre" class="col-md-4 control-label text-right"> *Denominación o Razón Social actual de la sociedad:</label>
            <div class="col-md-8">
              <input type="text" id="txtNombre" value="" class="form-control">
          </div>
      </div>
      <br><br>
      <div class="form-group">
          <label for="txtNombre" class="col-md-4 control-label text-right"> Denominación o razón Social anteriores: </label>
            <div class="col-md-8">
              <input type="text" id="txtNombreAnterior" value="" class="form-control">
          </div>
      </div>
      <br><br>
      <div class="form-group">
          <label for="txtNombre" class="col-md-4 control-label text-right"> *Domicilio social:</label>
            <div class="col-md-8">
              <input type="text" id="txtDomicilio" value="" class="form-control">
          </div>
      </div>
      <br><br>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Numero:</label>
                <div class="col-md-8">
                  <input type="text" id="txtNumero" value="" class="form-control">
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Calle:</label>
                <div class="col-md-8">
                  <input type="text" id="txtCalle" value="" class="form-control">
              </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Delegación/Municipio:</label>
                <div class="col-md-8">
                  <input type="text" id="txtMunicipio" value="" class="form-control">
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Entidad Federativa:</label>
                <div class="col-md-8">
                  <input type="text" id="txtEntidad" value="" class="form-control">
              </div>
          </div>
        </div>

      </div>
      <br><br>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group ">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Teléfono:</label>
                <div class="col-md-8">
                  <input type="text" id="txtTelefono" value="" class="form-control">
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> Fax:</label>
                <div class="col-md-8">
                  <input type="text" id="txtFax" value="" class="form-control">
              </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group ">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Correo electrónico:</label>
                <div class="col-md-8">
                  <input type="text" id="txtCorreo" value="" class="form-control">
              </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="form-group ">
              <label for="txtNombre" class="col-md-4 control-label text-right"> *Registro Federal de Contribuyentes:</label>
                <div class="col-md-8">
                  <input type="text" id="txtRfc" value="" class="form-control">
              </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right">  Número de registro patronal en el seguro social e INFONAVIT:</label>
                <div class="col-md-8">
                  <input type="text" id="txtInfonavit" value="" class="form-control">
              </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group row">
              <label for="txtNombre" class="col-md-4 control-label text-right"> Registro en la Cámara de Comercio:</label>
                <div class="col-md-8">
                  <input type="text" id="txtRegCamComercio" value="" class="form-control">
              </div>
          </div>
        </div>


      </div>

      <div class="form-group">
         <label for="textHistoria" class="col-md-2 control-label"> Resumen de la historia de la sociedad :</label>
         <div class="col-md-10">
             <textarea class="form-control" rows="6" id="txtHistoria" placeholder="Resumen de la historia de la sociedad (desarrollo y actividad)" spellcheck="true"></textarea>
             <br>
         </div>
         <br>
      </div>
      <br><br>
      <div class="form-group">
               <label for="textTuristica" class="col-md-2 control-label"> Estudios recientes realizados a la compañía y subsidiarias preparados por:</label>
               <div class="col-md-10">
                 <textarea class="form-control" rows="6" id="txtEstudios" placeholder="Estudios recientes realizados a la compañía y subsidiarias preparados por" spellcheck="true"></textarea>
                 <br>
               </div>
             </div>

    <br><br><br>
    <div class="row">
      <br><br>
      <div class="col-md-12 text-center">
          <button type="button" name="button" class="btn btn-md btn-primary" id="btnGuardar">Guardar</button>
      </div>
    </div>


    </div>
  </div>


    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="datepicker/js/bootstrap-datepicker.js"></script>
    <script src="js/agregarCliente.js"></script>

</body>
</html>
