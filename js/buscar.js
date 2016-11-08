
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

function getDetallesSitioCodigo(){

  var datos = $.ajax({
    url: 'php/sitios/getDetallesSitioCodigo.php',
    data: {
      //token:  token.val(),
      codigoSitio: buscarC
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
  buscarC = locationVars("c");
//  txtPalabra1.val(buscarC);
  if (buscarC != 0) {
    getDetallesSitioCodigo();
  }

});
