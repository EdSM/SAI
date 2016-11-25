var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtSubtema=$('#txtSubtema'),
    txtSubtemaE=$('#txtSubtemaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idMAteriaE=$('#idMAteriaE'),
    slcTemaE=$('#slcTemaE'),
    slcTema=$('#slcTema');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

    function getTemas(){
      var datos = $.ajax({
        url: 'php/temas/getTodoTemas.php',
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

        if ( res.status === 'OK' ){
           slcTema.html('');
           slcTemaE.html('');
           var i = 1;
           $.each(res.data, function(k,o){

             slcTema.append(
               '<option value='+o.temId+'>'+o.temNombre+'</option>'
             );
             slcTemaE.append(
               '<option value='+o.temId+'>'+o.temNombre+'</option>'
             );

           i++

         });

        }else{
          tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
        }
    }

function getSubtemas(){
  var datos = $.ajax({
    url: 'php/subtemas/getTodoSubtemas.php',
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
             '<td class="">'+o.subId+'</td>'+
             '<td class="">'+o.subNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.subId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.subId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
       );
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}

    function agregarSubtema(){
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: 'php/subtemas/agregarSubtema.php',
        data: {
          nombreSubtema:txtSubtema.val(),
          idTema:slcTema.val()
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
          getSubtemas();
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

        txtSubtemaE.val('');

        idMAteriaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtSubtemaE.val(o.matNombre);
              idMAteriaE.val(o.matId);
            });
        }else{
          txtSubtemaE.val(res.message);
        }
    }

    function editarMateria(){
      var editar = $.ajax({
        url: 'php/materia/editarMateria.php',
        data: {
          idMateria:idMAteriaE.val(),
          nombreMateria:txtSubtemaE.val(),

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
          getSubtemas();
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
  txtSubtema.val('');
}

function eliminarMateria(id){
  var editar = $.ajax({
    url: 'php/materia/eliminarMateria.php',
    data: {
      idMateria:id
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
      getSubtemas();
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
    title: "¿Seguro de eliminar la materia seleccionada?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarMateria(id);
  });
}

function validar(){
  if ((txtSubtema.val()==null)||(txtSubtema.val()=='')) {
    txtSubtema.focus();
    swal("Debe ingresar el nombre del subtema.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getSubtemas();
  getTemas();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarSubtema);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarMateria);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarMateria);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
