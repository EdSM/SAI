var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtTema=$('#txtTema'),
    txtTemaE=$('#txtTemaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idMAteriaE=$('#idMAteriaE'),
    slcMateria=$('#slcMateria');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar'),
    slcMateriaE=$('#slcMateriaE');

function getMaterias(){
  var datos = $.ajax({
    url: 'php/materia/getTodoMaterias.php',
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

    slcMateria.html('');
    slcMateriaE.html('');
    if ( res.status === 'OK' ){

       var i = 1;
       slcMateria.html('');
       slcMateriaE.html('');
       $.each(res.data, function(k,o){

         slcMateria.append(
          '<option value='+o.matId+'>'+o.matNombre+'</option>'
        );
        slcMateriaE.append(
          '<option value='+o.matId+'>'+o.matNombre+'</option>'
        );

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}

function getTemas (){
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

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.temId+'</td>'+
             '<td class="">'+o.temNombre+'</td>'+
             '<td class="">'+o.matNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.temId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.temId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
       );
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}

    function agregarTema(){
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: 'php/temas/agregarTema.php',
        data: {
          nombreTema:txtTema.val(),
          materiaTema:slcMateria.val()
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
          getTemas();
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

        txtTemaE.val('');

        idMAteriaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtTemaE.val(o.matNombre);
              idMAteriaE.val(o.matId);
            });
        }else{
          txtTemaE.val(res.message);
        }
    }

    function editarMateria(){
      var editar = $.ajax({
        url: 'php/materia/editarMateria.php',
        data: {
          idMateria:idMAteriaE.val(),
          nombreMateria:txtTemaE.val(),

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
          getTemas();
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
  txtTema.val('');
}

function eliminarTema(id){
  var editar = $.ajax({
    url: 'php/temas/eliminarTema.php',
    data: {
      idTema:id
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
      getTemas();
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
    eliminarTema(id);
  });
}

function validar(){
  if ((txtTema.val()==null)||(txtTema.val()=='')) {
    txtTema.focus();
    swal("Debe ingresar el nombre de la entidad.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getTemas();
  getMaterias();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarTema);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarMateria);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarMateria);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
