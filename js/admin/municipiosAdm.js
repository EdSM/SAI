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
    slcEntidad=$('#slcEntidad');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

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
      '<option value=0>Seleccione una opción para visualizar su contenido o agregar un nuevo  municipio</option>'
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

       var i = 1;
       $.each(res.data, function(k,o){

         tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.munId+'</td>'+
             '<td class="">'+o.munNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.munId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.munId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
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

    function agregarMunicipio(){
      idEntidadS = slcEntidad.val();
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: '../php/municipios/agregarMunicipio.php',
        data: {
          nombreMunicipio : txtMunicipio.val(),
          idEntidad : idEntidadS
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


    function seleccionarMunicipio(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: '../php/municipios/seleccionarMunicipio.php',
        data: {
          idMunicipio: id
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

        txtMunicipioE.val('');
        idMunicipioE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtMunicipioE.val(o.munNombre);
              idMunicipioE.val(o.munId);
            });
        }else{
          txtMunicipioE.val(res.message);
        }
    }

    function editarMunicipio(){
      var editar = $.ajax({
        url: '../php/municipios/editarMunicipio.php',
        data: {
          idMunicipio:idMunicipioE.val(),
          nombreMunicipio:txtMunicipioE.val(),

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

function eliminarMunicipio(id){
  var editar = $.ajax({
    url: '../php/municipios/eliminarMunicipio.php',
    data: {
      idMunicipio:id
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
    title: "¿Seguro de eliminar el municipio seleccionada?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarMunicipio(id);
  });
}

function validar(){
  if ((txtMunicipio.val()==null)||(txtMunicipio.val()=='')) {
    txtMunicipio.focus();
    swal("Debe ingresar el nombre del municipio.")
    return false;
  }
  if (slcEntidad.val()==0) {
    slcEntidad.focus();
    swal("Debe seleccionar una entidad federativa.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getEntidades();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarMunicipio);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarMunicipio);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarMunicipio);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcEntidad.on( "change", getMunicipios );
