var slctCultura=$('#slctCultura'),
  slctEntidad=$('#slctEntidad'),
  slctMunicipios=$('#slctMunicipios');
var btnBuscar=$('#btnBuscar'),
  spnBuscar=$('#spnBuscar'),
  spnListo=$('#spnListo');
var pnlResultados=$('#pnlResultados'),
  tblResultados=$('#tblResultados'),
  tbodyResultados=$('#tbodyResultados');
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

var pnlSitios=$('#pnlSitios');

  /*function getEmplazamientos(){
    var datos = $.ajax({
        url: 'getEmplazamientos',
        type: 'get',
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
      slctCultura.html('');
      if ( res.status === 'OK' ){

        slctCultura.append('<option value="0">Todos</option>');

        $.each(res.data, function(k,o){
          slctCultura.append(
            '<option value="'+o.empId+'">'+o.empNombre+'</option>'
        );
        });

      }else{
        slctCultura.append('<option value="">'+res.message+'</option>');
      }

  }*/

function getEstados(){
  var datos = $.ajax({
    url: 'php/entidades/getTodoEntidades.php',
    type: 'get',
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
    slctMunicipios.html('');
    if ( res.status === "OK" ){

      slctEntidad.append('<option value="0">Todos</option>');

      $.each(res.data, function(k,o){
        slctEntidad.append(
          '<option value="'+o.entId+'">'+o.entNombre+'</option>'
      );
      });

    }else{
      slctEntidad.append('<option value="">'+res.message+'</option>');
    }

}


function getCulturas(){
  var datos = $.ajax({
      url: 'php/culturas/getTodoCulturas.php',
      type: 'get',
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
    slctCultura.html('');
    if ( res.status === 'OK' ){

      slctCultura.append('<option value="0">Todos</option>');

      $.each(res.data, function(k,o){
        slctCultura.append(
          '<option value="'+o.culId+'">'+o.culNombre+'</option>'
      );
      });

    }else{
      slctCultura.append('<option value="">'+res.message+'</option>');
    }
}
function seleccionarEstado(){
  var datos = $.ajax({
    url: 'php/municipios/getMunicipiosPEntidades.php',
    data: {
      idEntidad: slctEntidad.val()
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
    slctMunicipios.html('');
    if ( res.status === 'OK' ){

      slctMunicipios.append('<option value="0">Todos</option>');

      $.each(res.data, function(k,o){
        slctMunicipios.append(
          '<option value="'+o.munId+'">'+o.munNombre+'</option>'
      );
      });

    }else{
      slctMunicipios.append('<option value="">'+res.message+'</option>');
    }

}

        function getSitiosUbicacion(){
            spnListo.addClass('hidden');
            spnBuscar.removeClass('hidden');
            tblResultados.removeClass('hidden');

              var datos = $.ajax({
                url: 'php/sitios/getSitiosUbicacion.php',
                data: {
                  //token:  token.val(),
                  idEntidad: slctEntidad.val(),
                  idMunicipio: slctMunicipios.val(),
                  idCultura: slctCultura.val()
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
                      '</tr>'
                  );
                  i++;
                  });
                //  txtObtenidos.val(total);
                //  $("#tblResultados").tablesorter();
                }else{
                  tbodyResultados.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
                }
                setTimeout(function(){ spnBuscar.addClass('hidden'); spnListo.removeClass('hidden');}, 500);

                tblResultados.removeClass('hidden');
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
  function mostrarResultados(){
    pnlResultados.removeClass('hidden');
              pnlSitios.addClass('hidden');

            }

$(document).on('ready', function(){
  getEstados();
  getCulturas();
});
slctEntidad.change(seleccionarEstado);
btnBuscar.on('click', getSitiosUbicacion);
tblResultados.delegate('.enlaceFicha', 'click', getDetallesSitio);
