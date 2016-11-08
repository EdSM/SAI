var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtMunicipio=$('#txtMunicipio'),
    txtMunicipioE=$('#txtMunicipioE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idMunicipioE=$('#idMunicipioE'),
    slcEntidad=$('#slcEntidad'),
    slcMunicipio=$('#slcMunicipio'),
    slcCultura=$('#slcCultura'),
    slcEmplazamiento=$('#slcEmplazamiento');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

var txtSitio        =$('#txtSitio'),
    txtArea         =$('#txtArea'),
    txtInah         =$('#txtInah'),
    txtNemachtilo   =$('#txtNemachtilo'),
    txtOcupacion    =$('#txtOcupacion'),
    slcPublico      =$('#slcPublico'),
    txtMapa         =$('#txtMapa'),
    textActividades =$('#textActividades'),
    textHistoria    =$('#textHistoria'),
    textTuristica   =$('#textTuristica'),
    textActTuristica=$('#textActTuristica'),
    textClave       =$('#textClave');
var slcMunicipioE      =$('#slcMunicipioE'),
    slcCulturaE        =$('#slcCulturaE'),
    slcEmplazamientoE  =$('#slcEmplazamientoE'),
    slcPublicoE        =$('#slcPublicoE'),
    txtSitioE          =$('#txtSitioE'),
    txtInahE           =$('#txtInahE'),
    txtOcupacionE      =$('#txtOcupacionE'),
    txtMapaE           =$('#txtMapaE'),
    txtAreaE           =$('#txtAreaE'),
    txtNemachtiloE     =$('#txtNemachtiloE'),
    textClaveE         =$('#textClaveE'),
    textActTuristicaE  =$('#textActTuristicaE'),
    textTuristicaE     =$('#textTuristicaE'),
    textHistoriaE      =$('#textHistoriaE'),
    idSitioE           =$('#idSitioE'),
    textActividadesE   =$('#textActividadesE');


function getEntidades(){
  var datos = $.ajax({
    url: '../php/entidades/getTodoEntidades.php',
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
    slcEntidad.html('');
    slcEntidad.append(
      '<option value=0>Seleccione una entidad para ver municipios</option>'
    );

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         slcEntidad.append(
           '<option value="'+o.entId+'">'+o.entNombre+'</option>'
       );
       i++

     });

    }else{
      slcEntidad.append(
        '<option value=0>'+ res.message+'</option>'
      );

    }
}

function getMunicipios(){
  idEntidadS = slcEntidad.val();
  var datos = $.ajax({
    url: '../php/municipios/getMunicipiosPEntidades.php',
    data:{
      idEntidad: idEntidadS
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

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){
      slcMunicipio.html('');
      slcMunicipioE.html('');
      slcMunicipio.append(
        '<option value=0>Seleccione un municipio para ver sitios y culturas</option>'
      );

       var i = 1;
       $.each(res.data, function(k,o){

         slcMunicipio.append(
           '<option value='+o.munId+'>'+o.munNombre+'</option>'
         );
         slcMunicipioE.append(
           '<option value='+o.munId+'>'+o.munNombre+'</option>'
         );
       i++

     });

    }else{
      slcEntidad.append(
        '<option value=0>'+ res.message+'</option>'
      );

    }
}

function getCulturas(){
  var datos = $.ajax({
    url: '../php/culturas/getTodoCulturas.php',
    data: {
      buscar: 'null'  /*retorna todo contenido de tabla*/
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

    slcCultura.html('');
    slcCultura.append(
      '<option value=0>Seleccione una cultura </option>'
    );
    slcCulturaE.html('');


    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         slcCultura.append(
           '<option value='+o.culId+'>'+o.culNombre+'</option>'
         );
         slcCulturaE.append(
           '<option value='+o.culId+'>'+o.culNombre+'</option>'
         );
       i++

     });

    }else{
      slcCultura.append(
        '<option value=0>'+res.message+'</option>'
      );
    }
}

function getEmplazamiento(){
  var datos = $.ajax({
    url: '../php/emplazamiento/getTodoEmplazamiento.php',
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

    slcEmplazamientoE.html('');
    slcEmplazamiento.html('');
    slcEmplazamiento.append(
      '<option value=0>Seleccione un emplazamiento</option>'
    );

    if ( res.status === 'OK' ){
       var i = 1;
       $.each(res.data, function(k,o){

         slcEmplazamiento.append(
           '<option value='+o.empId+'>'+o.empNombre+'</option>'
         );
         slcEmplazamientoE.append(
           '<option value='+o.empId+'>'+o.empNombre+'</option>'
         );
       i++

     });

    }else{
      slcEmplazamiento.append(
        '<option value=0>'+res.message+'</option>'
      );
    }
}

function getSitios(){
  municipioS = slcMunicipio.val();
  getCulturas();
  var datos = $.ajax({
    url: '../php/sitios/getSitiosMunicipio.php',
    data:{
      idMunicipio: municipioS
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

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){
      tbodyRegistros.html('');
       var i = 1;
       $.each(res.data, function(k,o){

         tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.sitNombre+'</td>'+
             '<td class="">'+o.culNombre+'</td>'+
             '<td class="">'+o.sitRegInah+'</td>'+
             '<td class="">'+o.sitRegVhc+'</td>'+
             '<td class="">'+o.empNombre+'</td>'+
             '<td class="">'+o.sitArea+'</td>'+
             '<td class="">'+o.sitOcupacion+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.sitId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.sitId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
         );

         i++

     });
    }else{
      slcEntidad.append(
        '<option value=0>'+ res.message+'</option>'
      );

    }
}

    function agregarSitio(){
      idEntidadS = slcEntidad.val();
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: '../php/sitios/agregarSitio.php',
        data: {
          nombre:     txtSitio.val(),
          idCultura:     slcCultura.val(),
          regInah:       txtInah.val(),
          regVhc:        txtNemachtilo.val(),
          idEstado:      slcEntidad.val(),
          idMunicipio:   slcMunicipio.val(),
          area:          txtArea.val(),
          emplazamiento: slcEmplazamiento.val(),
          actividades:   textActividades.val(),
          ocupacion:     txtOcupacion.val(),
          historia:      textHistoria.val(),
          turistica:     textTuristica.val(),
          acTuristica:   textActTuristica.val(),
          publico:       slcPublico.val(),
          clave:         textClave.val(),
          mapa:          txtMapa.val()
        },
        type: 'post',
        dataType:'json',
          async:false
        }).error(function(e){
            alert('Ocurrio un error, intente de nuevo');
        }).responseText;

        var resultado;
        try{
          resultado = JSON.parse(editar);
        }catch (e){
            alert('Error JSON ' + e);
        }

        if ( resultado.status === 'OK' ){
          limpiar();
          getMunicipios();
          swal({
            title: "",
            text: " ",
            timer: 700,
            type: "success",
            showConfirmButton: true
          });
        }
        else {
          swal({
            title: "",
            text: resultado.message,
            //timer: 800,
            type: "error",
            showConfirmButton: true
          });
        }
    }


    function seleccionarSitio(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: '../php/sitios/seleccionarSitio.php',
        data: {
          idSitio: id
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

        /*txtMunicipioE.val('');
        idMunicipioE.val('');*/
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtSitioE.val(o.sitNombre);
              txtInahE.val(o.sitRegInah);
              txtOcupacionE.val(o.sitOcupacion);
              txtMapaE.val(o.sitMapa);
              txtAreaE.val(o.sitArea);
              txtNemachtiloE.val(o.sitRegVhc);
              textClaveE.val(o.sitClave);
              textActTuristicaE.val(o.sitActividadTuristica);
              textTuristicaE.val(o.sitTuristica);
              textHistoriaE.val(o.sitHistoria);
              textActividadesE.val(o.sitActividades);
              idSitioE.val(o.sitId);

              slcMunicipioE.find('option').each(function(){
                if ( o.sitMunicipio == $(this).val() )
                slcMunicipioE.val(o.sitMunicipio);
              });

              slcEmplazamientoE.find('option').each(function(){
                if ( o.slcEmplazamiento == $(this).val() )
                slcEmplazamientoE.val(o.sitEmplazamiento);
              });

              slcCulturaE.find('option').each(function(){
                if ( o.sitCulturas == $(this).val() )
                slcCulturaE.val(o.sitCulturas);
              });

              slcPublicoE.find('option').each(function(){
                if ( o.sitPublico == $(this).val() )
                slcPublicoE.val(o.sitPublico);
              });

           });
        }else{
          txtMunicipioE.val(res.message);
        }
    }

    function editarSitio(){
      var editar = $.ajax({
        url: '../php/sitios/editarSitio.php',
        data: {

            nombre   : txtSitioE.val(),
            idCultura : slcCulturaE.val(),
            regInah   : txtInahE.val(),
            regVhc    :   txtNemachtiloE.val(),
            idMunicipio: slcMunicipioE.val(),
            area      : txtAreaE.val(),
            emplazamiento: slcEmplazamientoE.val(),
            actividades : textActividadesE.val(),
            ocupacion   : txtOcupacionE.val(),
            historia    : textHistoriaE.val(),
            turistica   : textTuristicaE.val(),
            acTuristica : textActTuristicaE.val(),
            publico     : slcPublicoE.val(),
            clave       : textClaveE.val(),
            mapa        : txtMapaE.val(),
            idSitio     : idSitioE.val()


        },
        type: 'post',
        dataType:'json',
          async:false
        }).error(function(e){
            alert('Ocurrio un error, intente de nuevo');
        }).responseText;

        var resultado;
        try{
          resultado = JSON.parse(editar);
        }catch (e){
            alert('Error JSON ' + e);
        }

        if ( resultado.status === 'OK' ){
          limpiar();
          getSitios();
          cancelarEditar();
          swal({
            title: "",
            text: " ",
            timer: 700,
            type: "success",
            showConfirmButton: true
          });
        }
        else {
          swal({
            title: "",
            text: resultado.message,
            //timer: 800,
            type: "error",
            showConfirmButton: true
          });
        }

    }

function cancelarEditar(){
  formEditar.addClass('hidden');
  frmAgregar.removeClass('hidden');
  tblRegistros.removeClass('hidden');
}

function limpiar(){
  txtMunicipio.val('');
}

function eliminarSitio(id){
  var editar = $.ajax({
    url: '../php/sitios/eliminarSitio.php',
    data: {
      idSitio:id
    },
    type: 'post',
    dataType:'json',
      async:false
    }).error(function(e){
        alert('Ocurrio un error, intente de nuevo');
    }).responseText;

    var resultado;
    try{
      resultado = JSON.parse(editar);
    }catch (e){
        alert('Error JSON ' + e);
    }

    if ( resultado.status === 'OK' ){
      getMunicipios();
      swal({
        title: "",
        text: resultado.message,
        timer: 10000,
        type: "success",
        showConfirmButton: true
      });
    }
    else {
      swal({
        title: "",
        text: resultado.message,
        //timer: 800,
        type: "error",
        showConfirmButton: true
      });
    }
}

function eliminar(){
  var id = $(this).attr('id');
  swal({
    title: "¿Seguro de eliminar el sitio seleccionado?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarSitio(id);
  });
}

function validar(){
  if ((slcMunicipio.val()==0)||(slcMunicipio.val()=='')) {
    slcMunicipio.focus();
    swal("Debe seleccionar el nombre del municipio.")
    return false;
  }
  if (slcEntidad.val()==0) {
    slcEntidad.focus();
    swal("Debe seleccionar una entidad federativa.")
    return false;
  }

  if ((txtSitio.val()==null)||(txtSitio.val()=='')) {
    txtSitio.focus();
    swal("Debe ingresar el nombre del sitio arqueologico.")
    return false;
  }

  if (slcCultura.val()==0) {
    slcCultura.focus();
    swal("Debe seleccionar una cultura.")
    return false;
  }

  if ((txtInah.val()==null)||(txtInah.val()=='')) {
    txtInah.focus();
    swal("Debe ingresar el registro INAH.")
    return false;
  }

  if ((txtNemachtilo.val()==null)||(txtNemachtilo.val()=='')) {
    txtNemachtilo.focus();
    swal("Debe ingresar el registro Nemachtilo.")
    return false;
  }

  if ((txtArea.val()==null)||(txtArea.val()=='')) {
    txtArea.focus();
    swal("Debe ingresar el area.")
    return false;
  }

  if (slcEmplazamiento.val()==0) {
    slcEmplazamiento.focus();
    swal("Debe seleccionar un emplazamiento.")
    return false;
  }
  if ((txtOcupacion.val()==null)||(txtOcupacion.val()=='')) {
    txtOcupacion.focus();
    swal("Debe ingresar el período de ocupación.")
    return false;
  }

  if ((textHistoria.val()==null)||(textHistoria.val()=='')) {
    textHistoria.focus();
    swal("Debe ingresar referencia historica.")
    return false;
  }

  if ((textTuristica.val()==null)||(textTuristica.val()=='')) {
    textTuristica.focus();
    swal("Debe ingresar información turística.")
    return false;
  }

  if ((textActTuristica.val()==null)||(textActTuristica.val()=='')) {
    textActTuristica.focus();
    swal("Debe ingresar actividad turística.")
    return false;
  }

  if (slcPublico.val()==2) {
    slcPublico.focus();
    swal("Debe indicar si se encuentra abierto al público.")
    return false;
  }

  if ((textClave.val()==null)||(textClave.val()=='')) {
    textClave.focus();
    swal("Debe ingresar palabras clave.")
    return false;
  }

    if ((txtMapa.val()==null)||(txtMapa.val()=='')) {
      txtMapa.focus();
      swal("Debe ingresar URL del mapa.")
      return false;
    }

  return true;
}

$(document).on('ready', function(){
  getEntidades();
  getEmplazamiento();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarSitio);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarSitio);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarSitio);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcEntidad.on( "change", getMunicipios );
slcMunicipio.on( "change", getSitios );
//slcCultura.on("change", getEmplazamiento);
