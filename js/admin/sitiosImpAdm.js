var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtEntidad=$('#txtEntidad'),
    txtEntidadE=$('#txtEntidadE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idEntidadE=$('#idEntidadE');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

/*function getEntidades(){
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

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.entId+'</td>'+
             '<td class="">'+o.entNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.entId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.entId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
       );
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}
*/
/*
    function agregarEntidad(){
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: '../php/entidades/agregarEntidad.php',
        data: {
          nombreEntidad:txtEntidad.val()
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
          getEntidades();
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
*/
/*

    function seleccionarEntidad(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: '../php/entidades/seleccionarEntidad.php',
        data: {
          idEntidad: id
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

        txtEntidadE.val('');

        idEntidadE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtEntidadE.val(o.entNombre);
              idEntidadE.val(o.entId);
            });
        }else{
          txtEntidadE.val(res.message);
        }
    }
*/
/*
    function editarEntidad(){
      var editar = $.ajax({
        url: '../php/entidades/editarEntidad.php',
        data: {
          idEntidad:idEntidadE.val(),
          nombreEntidad:txtEntidadE.val(),

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
          getEntidades();
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
*/
/*
function cancelarEditar(){
  formEditar.addClass('hidden');
  frmAgregar.removeClass('hidden');
  tblRegistros.removeClass('hidden');
}
*/

function limpiar(){
  txtEntidad.val('');
}
/*
function eliminarEntidad(id){
  var editar = $.ajax({
    url: '../php/entidades/eliminarEntidad.php',
    data: {
      idEntidad:id
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
      getEntidades();
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
*/
/*
function eliminar(){
  var id = $(this).attr('id');
  swal({
    title: "¿Seguro de eliminar la entidad seleccionada?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarEntidad(id);
  });
}
*/
/*

function validar(){
  if ((txtEntidad.val()==null)||(txtEntidad.val()=='')) {
    txtEntidad.focus();
    swal("Debe ingresar el nombre de la entidad.")
    return false;
  }

  return true;
}
*/
$(document).on('ready', function(){
//  getEntidades();
});

btnLimpiar.on('click',limpiar);
//btnAgregar.on('click',agregarEntidad);

//btnCancelarE.on('click',cancelarEditar);
//btnAgregarE.on('click',editarEntidad);

//tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarEntidad);
//tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
