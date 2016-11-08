var btnAdm   = $('#btnAdm'),
    pnlAdmin = $('#pnlAdmin'),
    phlBusqueda =$('#phlBusqueda'),
    btnBuscador=$('#btnBuscador'),
    txtObtenidos =$('#txtObtenidos');
var btnBuscar = $('#btnBuscar'),
    txtBuscar = $('#txtBuscar'),
    btnLimpiar = $('#btnLimpiar');
var tblResultados   = $('#tblResultados'),
    tbodyResultados = $('#tbodyResultados'),
    token = $('#_token');
var spnBuscar =$('#spnBuscar'),
    spnListo = $('#spnListo');
var btnBuscarP = $('#btnBuscarP'),
txtPalabra1 =$('#txtPalabra1'),
txtPalabra2 =$('#txtPalabra2'),
txtPalabra3 =$('#txtPalabra3'),
buscar=0;
var pnlResultados = $('#pnlResultados'),
pnlSitios = $('#pnlSitios');
var slctEntidad =$('#slctEntidad'),
    slctMunicipios = $('#slctMunicipios'),
    slctCultura =$('#slctCultura');

var hNombre = $('#hNombre'),
    txtEntidad = $('#txtEntidad'),
    txtMunicipio = $('#txtMunicipio'),
    txtCultura = $('#txtCultura'),
    txtArea  = $('#txtArea'),
    txtOcupacion = $('#txtOcupacion'),
    txtActividades = $('#txtActividades'),
    txtHistoria = $('#txtHistoria'),
    txtActividadTuristica = $('#txtActividadTuristica'),
    txtTuristica = $('#txtTuristica'),
    txtPublico = $('#txtPublico'),
    txtEmplazamiento = $('#txtEmplazamiento'),
    frameMapa = $('#frameMapa');
var buscarC=0;

            function validarBuscar(){
              if (( txtBuscar.val() === '')||( txtBuscar.val() === null)){
                alert("Ingrese una cadena de caracteres a buscar.");
                txtBuscar.focus();
                return false;
              }
              return true;
            }


            function getSitiosPalabra(){
                spnListo.addClass('hidden');
                spnBuscar.removeClass('hidden');

                pnlSitios.addClass('hidden');
                pnlResultados.removeClass('hidden');

                  var datos = $.ajax({
                    url: 'php/sitios/getSitiosPalabra.php',
                    data: {
                      token:  token.val(),
                      palabra1: txtPalabra1.val()
                    },
                    type: 'post',
                        dataType:'json',
                        async:false
                    }).error(function(e){
                        alert('Ocurrio un error, intente de nuevo');
                    }).responseText;

                    var res;
                    try{
                        res = JSON.parse(datos);
                    }catch (e){
                        alert('Error JSON ' + e);
                    }
                    var total = res.total;
                    tbodyResultados.html('');
                    if ( res.status === 'OK' ){
                       var i = 1;
                      $.each(res.data, function(k,o){

                    var ubicacion;


                        tbodyResultados.append(
                          '<tr>'+
                          '<td ><a class="enlaceFicha" style="cursor:pointer; text-decoration:none;" id="'+o.sitId+' ">'+o.sitNombre+'</a></td>'+
                          '<td class="text-center">'+o.culNombre+'</td>'+
                          '<td class="text-center">'+o.munNombre+'</td>'+
                          '<td class="text-center">'+o.entNombre+'</td>'+
                          '<td class="text-left">'+o.sitHistoria+'...</td>'+

                          /*'<span class="glyphicon glyphicon-edit text-primary" id="'+o.sitId+'" '+
                          'style="cursor:pointer" title="Ver sitio"></span> '+*/
                          '</tr>'
                      );
                      i++;
                      });
                      txtObtenidos.val(total);
                    //  $("#tblResultados").tablesorter();
                    }else{
                      tbodyResultados.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
                    }
                    setTimeout(function(){ spnBuscar.addClass('hidden'); spnListo.removeClass('hidden');}, 500);

                    tblResultados.removeClass('hidden');


                }
                function validarBuscar(){
                  if (( txtBuscar.val() === '')||( txtBuscar.val() === null)){
                    alert("Ingrese una cadena de caracteres a buscar.");
                    txtBuscar.focus();
                    return false;
                  }
                  return true;
                }
function mostrarResultados(){
  pnlResultados.removeClass('hidden');
  pnlSitios.addClass('hidden');

}

function getDetallesSitio(){
  var idSitio = $(this).attr('id');
  pnlSitios.removeClass('hidden');
  pnlResultados.addClass('hidden');

  var datos = $.ajax({
    url: 'php/sitios/getDetallesSitio.php',
    data: {
      //token:  token.val(),
      idSitio: idSitio
    },
    type: 'post',
        dataType:'json',
        async:false
    }).error(function(e){
        alert('Ocurrio un error, intente de nuevo');
    }).responseText;

    var res;
    try{
        res = JSON.parse(datos);
    }catch (e){
        alert('Error JSON ' + e);
    }
    var total = res.total;

    if ( res.status === 'OK' ){
       var i = 1;
       txtCultura.html('');
       txtEntidad.html('');
       txtArea.html('');
       txtOcupacion.html('');
       txtActividades.html('');
       txtHistoria.html('');
       txtActividadTuristica.html('');
       txtTuristica.html('');
       txtPublico.html('');
       txtEmplazamiento.html('');

      $.each(res.data, function(k,o){
        var publico = "No abierto al público";
        if (o.sitPublico == 1) {
          publico = "Abierto al público";
        }

        document.getElementById("hNombre").innerHTML = o.sitNombre;
        txtCultura.append("Cultura "+o.culNombre);
        //txtMunicipio.append(o.munNombre);
        txtEntidad.append(o.munNombre);
        txtEntidad.append(", "+o.entNombre);
        txtArea.append("Área: "+o.sitArea);
        txtOcupacion.append("Ocupación: "+o.sitOcupacion);
        txtActividades.append("Actividades: "+o.sitActividades);

        var sqlHistoria = o.sitHistoria;
        var sqlActividadTuristica = o.sitActividadTuristica;
        var sqlTuristica = o.sitTuristica;

        var historia = sqlHistoria.replace(/(?:\\n)/g, "<br />");
        var actividadTuristica = sqlActividadTuristica.replace(/(?:\\n)/g, "<br />");
        var turistica = sqlTuristica.replace(/(?:\\n)/g, "<br />");

        txtHistoria.append(historia);
        txtActividadTuristica.append(actividadTuristica);
        txtTuristica.append(turistica);

        txtPublico.append(publico);
        txtEmplazamiento.append("Emplazamiento: "+o.empNombre);

        frameMapa.html('');
        frameMapa.append(o.sitMapa);
      /*  frameMapa.children("iframe").attr('width: 100%');
        frameMapa.children("iframe").attr('height: 400px');*/

      });

    }
}

function locationVars (vr){
        var src = String( window.location.href ).split('?')[1];
        var variables = src.split('&');
        for (var x = 0, c = variables.length; x < c; x++){
        	if (variables[x].indexOf(vr) != -1){
        		return decodeURI( variables[x].split('=')[1] );
        		break;
        	};
        };
};


$(document).on('ready', function(){

  /*getEstados();
  getCulturas();
  pnlSitios.addClass('hidden');*/
  pnlResultados.addClass('hidden');

  buscar = locationVars("t");
  txtPalabra1.val(buscar);
  if (buscar != 0) {
    console.log("palabra");
    getSitiosPalabra();
  }

  txtPalabra1.keyup(function (e) {
    console.log("codigo");
    if (e.keyCode == 13) {
      getSitiosPalabra();
    }
  });
});


btnBuscar.on('click', getSitiosPalabra);

//tbodyResultados.delegate('.glyphicon-edit', 'click', getDetallesSitio);
tbodyResultados.delegate('.enlaceFicha', 'click', getDetallesSitio);
