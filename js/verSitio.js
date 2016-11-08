var idSitio;
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
    txtEmplazamiento = $('#txtEmplazamiento');

function getDetallesSitio(){
  var datos = $.ajax({
    url: 'getDetallesSitio',
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
      $.each(res.data, function(k,o){
        var publico = "No";
        if (o.sitPublico == 1) {
          publico = "Sí";
        }

        document.getElementById("hNombre").innerHTML = o.sitNombre;
        txtCultura.val(o.culNombre);
        txtMunicipio.val(o.munNombre);
        txtEntidad.val(o.entNombre);
        txtArea.val(o.sitArea);
        txtOcupacion.val(o.sitOcupacion);
        txtActividades.val(o.sitActividades);
        txtHistoria.val(o.sitHistoria);
        txtActividadTuristica.val(o.sitActividadTuristica);
        txtTuristica.val(o.sitTuristica);
        txtPublico.val(publico);
        txtEmplazamiento.val(o.empNombre);


        /*  '<td class="text-left">'+o.sitHistoria+'...</td>'+
          '<td class="text-center">'+
          '<a href="verSitio?s='+o.sitId+'"> <span class="glyphicon glyphicon-edit text-primary" id="'+o.sitId+'" '+
          'style="cursor:pointer" title="Ver sitio"></span> </a>'+
          '</td>'+

          '</tr>'*/
      });

    }
    /*else{

    }*/
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

  idSitio = locationVars("s");
  getDetallesSitio();

});
