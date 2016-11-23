var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtCategoria=$('#txtCategoria'),
    txtCategoriaE=$('#txtCategoriaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idMAteriaE=$('#idMAteriaE');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

function getCategorias(){
  var datos = $.ajax({
    url: 'php/categoria/getTodoCategorias.php',
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
             '<td class="">'+o.catId+'</td>'+
             '<td class="">'+o.catNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.catId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.catId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
       );
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}

    function agregarCategoria(){
      /*if (!validar()) {
        return false;
      }*/
      var editar = $.ajax({
        url: 'php/categoria/agregarCategoria.php',
        data: {
          nombreCategoria:txtCategoria.val()
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
          getCategorias();
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


    function seleccionarMateria(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: 'php/materia/seleccionarMateria.php',
        data: {
          idMateria: id
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

        txtCategoriaE.val('');

        idMAteriaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtCategoriaE.val(o.matNombre);
              idMAteriaE.val(o.matId);
            });
        }else{
          txtCategoriaE.val(res.message);
        }
    }

    function editarMateria(){
      var editar = $.ajax({
        url: 'php/materia/editarMateria.php',
        data: {
          idMateria:idMAteriaE.val(),
          nombreMateria:txtCategoriaE.val(),

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
          getCategorias();
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
  txtCategoria.val('');
}

function eliminarCategoria(id){
  var editar = $.ajax({
    url: 'php/categoria/eliminarCategoria.php',
    data: {
      idCategoria:id
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
      getCategorias();
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
    title: "¿Seguro de eliminar la categoría seleccionada?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarCategoria(id);
  });
}

function validar(){
  if ((txtCategoria.val()==null)||(txtCategoria.val()=='')) {
    txtCategoria.focus();
    swal("Debe ingresar el nombre de la entidad.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getCategorias();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarCategoria);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarMateria);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarMateria);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
