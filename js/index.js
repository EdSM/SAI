var txtBuscar = $('#txtBuscar'),
txtBuscarC=$('#txtBuscarC');

var btnEnviar = $('#btnEnviar'),
    inpNombre = $('#inpNombre'),
    inpEmail = $('#inpEmail'),
    txtMensaje = $('#txtMensaje'),
    chkAcepto = $('#chkAcepto'),
    contactoh = $('#contactoh');
var procesoEnviar=$('#procesoEnviar'),
    aceptoCheck =$('#aceptoCheck');
var modalError =$('#modalError'),
    pContenidoModal=$('#pContenidoModal'),
    pTituloModal=$('#pTituloModal');


$(function() {                                          //para efecto parallax
    $('a.page-scroll').bind('click', function(event) {  /*utiliza la clase page-scroll desde ek menu, jquery y jquery.easing.min.js*/
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


function verificarCheck(){
  if (chkAcepto.is(':checked')){
    aceptoCheck.removeClass('fondoRojo');
  }
  else{
    aceptoCheck.addClass('fondoRojo');

  }
}

function enviar(){

  if ( !verificarContenido() ){

    return false;
  }
  procesoEnviar.removeClass('hidden');
  console.log("envio");
  var datos = $.ajax({
    url:'../php/public/enviarContacto.php',
    data: {
      nombreContacto: inpNombre.val(),
      correoContacto: inpEmail.val(),
      condicionesContacto: chkAcepto.prop( "checked" ),
      mensajeContacto: txtMensaje.val(),
      contactoh: contactoh.val()
    },
    type:'post',
    dataType:'json',
    async:false
  }).error(function(e){
      alert('Ocurrio un error, intente de nuevo');
  }).responseText;

  var tituloAlert="",textoAlert="",estadoAlert="";
  var res;
  try{
      res = JSON.parse(datos);
  }catch (e){
      alert('Error JSON ' + e);
  }

  if ( res.status === 'OK' ){
    pTituloModal.text("Mensaje enviado.");
    pContenidoModal.text(res.message);
    limpiar();

  }else{    
    pTituloModal.text("No se pudo enviar el mensaje.");
    pContenidoModal.text(res.message);
    //estdoAlert = "error";
  }
  modalError.modal();
  procesoEnviar.addClass('hidden');
}

function limpiar(){
  inpNombre.val('');
  inpEmail.val('');
  txtMensaje.val('');
  chkAcepto.prop( "checked", false );
}



function verificarContenido(){
  pTituloModal.text("Verifique el contenido del formulario");
  if((inpNombre.val() == '' )||(inpNombre == null)){
    pContenidoModal.text("Favor de indicar su nombre.");
    modalError.modal();
    inpNombre.focus();
    return false;
  }

  if((inpEmail.val() == '' )||(inpEmail == null)){
    pContenidoModal.text("Favor de indicar su correo electrónico.");
    modalError.modal();
    inpEmail.focus();
    return false;
  }
  if((txtMensaje.val() == '' )||(txtMensaje == null)){
    pContenidoModal.text("Favor de ingresar su mensaje o comentario.");
    modalError.modal();
    txtMensaje.focus();
    return false;
  }

  if (chkAcepto.is(':checked')){
    return true;
  }
  else{
  pContenidoModal.text("Debe aceptar las políticas de uso y privacidad. Para hacer uso de este sitio web usted deberá aceptar las políticas de uso y privacidad.");

    modalError.modal();
    aceptoCheck.addClass('fondoRojo');
    return false;
  }
}



function enviarBusqueda(){
  texto = txtBuscar.val();
  ruta = "resultadoPalabra.php?t=";
  url=ruta.concat(texto);
  location.href =url;
}
function enviarBusquedaC(){
  textoC = txtBuscarC.val();
  console.log(textoC);
  ruta = "busqueda.php?c=";
  url=ruta.concat(textoC);
  location.href =url;
}

$(document).on('ready', function(){
  txtBuscar.val('');

  txtBuscar.keyup(function (e) {
    if (e.keyCode == 13) {
      enviarBusqueda();
    }
  });

});

chkAcepto.on('click',verificarCheck);
btnEnviar.on('click', enviar);
