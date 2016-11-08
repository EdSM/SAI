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
      Nemachtilo, A.C.
  </title>

  <link rel="stylesheet" href="css/bootstrap.min.css" charset="utf-8">
  <link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.min.css">
  <link href="css/landing-page.css" rel="stylesheet">

</head>

<body data-spy="scroll" id="page-top">
  <?php include("secciones/navegacionIndex.php"); ?>

    <!-- Header -->

    <div class="intro-header" id="inicio">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">

                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.intro-header -->

    <!-- Page Content -->


    <div class="content-section-a" id="sitios">

        <div class="container padding2">
            <div class="row padding2">
                <div class="text-center">
                    <div class="clearfix"></div>
                    <h2 class="section-heading"></h2>
                    <!--   <br/><br/><br/><br><br>  -->
                    <div name="signup-form">

                      <input id="txtBuscar" size="40" type="text" value="" placeholder="Escribe una palabra." title="Introduzca una palabra." required>
                      <button id="btnBuscar" onclick="enviarBusqueda()" class="">Buscar</button>
                      <br><br><br>
                  <!--      <input id="txtBuscarC" size="40" type="text" value="" placeholder="Escribe un código." title="Introdusca una palabra." required>
                      <button id="btnBuscarC" onclick="enviarBusquedaC()" class="">Buscar</button>
                    </div> -->
                    <!--    <br/><br/><br/><br><br> -->

                </div>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

    <div class="content-section-b" id="nosotros">

        <div class="container">

            <div class="row padding2">

                    <br/><br/><br/><br/><br/>

                    <p align="center" style="margin-left:200px; margin-right:200px"><i>Nemachtilo</i> es un proyecto cultural que tiene como objetivo la difusión del patrimonio arqueológico de México. Nuestra tarea en la difusión tendrá varios caminos a seguir: a través de un sitio web en el que se muestre la información histórica, cultural y turística de cada uno de los sitios ubicados en el país; a través de libros impresos y digitales en los que se publique la información organizada por estados; a través de cursos de sensibilización y educación patrimonial tanto a niños de educación primaria y secundaria como al público en general y, por último, a través de recorridos culturales guiados y visitas especializadas. La finalidad es ofrecer una guía de consulta y de referencia que comprenda información sobre nuestro patrimonio y de los sitios arqueológicos, para ser un sitio de referencia en el tema.
                    </p>
                    <p align="center" style="margin-left:200px; margin-right:200px">Los colaboradores involucrados en el proyecto forman un grupo de trabajo especializado en la investigación, la creación de contenidos, gestión intercultural y la edición en sus diferentes ámbitos. Desde una visión responsable y comprometida con la conservación, valoración y difusión del patrimonio nacional.</p>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.content-section-b -->


        <!-- /.container -->

    </div>
    <!-- /.content-section-a -->

  <a  name="contact"></a>
    <div class="banner" id="contacto">

        <div class="container">

            <div class="row padding2">

              <div class="col-md-6">
                <h3>Contacte con nosotros</h3>
                <br>

                <div name="sentMessage" >
                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Nombre:</label>
                            <input type="text" class="form-control" placeholder="*nombre completo" id="inpNombre" name="inpNombre" required data-validation-required-message="Please enter your name.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>
                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Correo:</label>
                            <input type="email" class="form-control" placeholder="*correo electrónico" id="inpEmail" name="inpEmail" required data-validation-required-message="Please enter your email address.">
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="row control-group">
                        <div class="form-group col-xs-12 floating-label-form-group controls">
                            <label>Mensaje:</label>
                            <textarea rows="5" class="form-control" placeholder="*mensaje o comentario" id="txtMensaje" name="txtMensaje" required data-validation-required-message="Please enter a message."></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                    </div>

                    <div class="row control-group">
                      <div class="form-group col-xs-12 floating-label-form-group controls">
                        <div class="checkbox"> <!-- animacionEscalaLoop -->
                          <label class="grisClaro" id="aceptoCheck">
                            <input type="checkbox" id="chkAcepto" name="acepto">
                              *Al hacer clic en el botón, acepto la <a href="piePagina/politicaUso.php">Política de uso y privacidad del sitio web</a> y el <a href="piePagina/avisoPrivacidadClientes.php" >Aviso de privacidad para clientes</a>.
                            </label>
                        </div>
                      </div>
                    </div>

                    <br>
                    <div id="success"></div>
                    <div class="row">
                        <input class="hidden" type="text" name="name" value="12364A15D2C21" id="contactoh">
                        <div class="form-group col-xs-12">
                            <button id="btnEnviar" class="btn btn-success btn-lg">Enviar</button>
                        </div>
                        <br>
                        <div class="form-group col-xs-12 text-center hidden" id="procesoEnviar">
                            <i class="fa fa-spinner fa-pulse fa-3x fa-fw "></i>
                            Enviando...
                        </div>
                    </div>
                </div>
            </div>







      <!--      <div class="">



                              <h3>Contacta con nosotros</h3>
                              <br/><br/>

                              <ul class="list-inline banner-social-buttons">
                                  <li>
                                      <a href="https://www.facebook.com/Nemachtilo-1492208007747315/" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-facebook fa-fw"></i> <span class="network-name"></span></a>
                                  </li>
                                  <li>
                                      <a href="https://twitter.com/Nemachtiloo" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-twitter fa-fw"></i> <span class="network-name"></span></a>
                                  </li>
                                  <li>
                                      <a href="http://todosaprendemos.tumblr.com" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-tumblr fa-fw"></i> <span class="network-name"></span></a>
                                  </li>
                                  <li>
                                      <a href="https://www.pinterest.com/nemachtilo/" target="_blank" class="btn btn-default btn-lg"><i class="fa fa-pinterest fa-fw"></i> <span class="network-name"></span></a>
                                  </li>
                              </ul>
                              <br/><br/><br/><br/>




          </div>
-->

        </div>
    </div>
  </section>


              </div>



            </div>

        </div>
        <!-- /.container -->

    </div>
    <!-- /.banner -->


    <div class="modal fade" id="modalError" role="dialog"> <!-- * * * * * * * * * * * *  M O D A L 2   * * * * * * *  *  * -->
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <p class="text-center tituloModal" id="pTituloModal">
            </p>
            <br><br>
            <p class="text-center" id="pContenidoModal">

            </p>
          </div>
          <div class="modal-footer">
           <button type="button" class="btn btn-primary" data-dismiss="modal">Cerrar</button>
         </div>

        </div>

      </div>
    </div> <!-- * * * * * * * * * * * * / M O D A L 2   * * * * * * *  *  * -->


<<?php include("secciones/pie.php") ?>
    <script src="js/jquery.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/index.js"></script>

</body>
</html>
