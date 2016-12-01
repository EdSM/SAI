var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var
    txtSubtemaE=$('#txtSubtemaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idSubtemaE=$('#idSubtemaE'),

    slcTemaE=$('#slcTemaE'),
    slcMateria=$('#slcMateria'),
    slcTema=$('#slcTema'),
    slcSubtema=$('#slcSubtema'),
    slcCategoria=$('#slcCategoria'),
    slcSubtema=$('#slcSubtema'),
    txtPregunta=$('#txtPregunta');

var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

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

        tbodyRegistros.html('');
        slcMateria.html('');
        slcMateria.append(
          '<option value=0>Seleccionar una materia</option>'
        );
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcMateria.append(
               '<option value='+o.matId+'>'+o.matNombre+'</option>'
             );

         });

        }else{
          slcMateria.append(
            '<option value=0>'+res.message+'</option>'

          );
        }
    }


    function getTemaMateria(){
      var datos = $.ajax({
        url: 'php/temas/getTemaMateria.php',
        data:{
          idMateria : slcMateria.val()
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
        slcTema.html('');
        if ( res.status === 'OK' ){
          slcTema.append(
            '<option value=0>Seleccione un tema</option>'
          );
           var i = 1;
           $.each(res.data, function(k,o){

             slcTema.append(
               '<option value='+o.temId+'>'+o.temNombre+'</option>'
             );

         });

        }else{

          slcTema.append(
            '<option value=0>'+ res.message+'</option>'
          );
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
      slcSubtema.append(
        '<option value=0>Seleccione subtema</option>'
      );
       var i = 1;
       $.each(res.data, function(k,o){

         slcSubtema.append(
           '<option value='+o.subId+'>'+o.subNombre+'</option>'
         );

     });

    }else{
      slcSubtema.append(
        '<option value=0>'+res.message+'</option>'
      );
    }
}

function getSubtemasTema(){
  var datos = $.ajax({
    url: 'php/subtemas/getSubtemasTema.php',
    data:{
      idTema: slcTema.val()
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

    slcSubtema.html('');
    slcSubtema.append(
      '<option value=0>Seleccione un subtema</option>'
    );
    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         slcSubtema.append(
           '<option value='+o.subId+'>'+o.subNombre+'</option>'
         );

        /* tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.subId+'</td>'+
             '<td class="">'+o.subNombre+'</td>'+
             '<td class="">'+o.temNombre+'</td>'+


             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.subId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.subId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'

       );*/
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
      slcSubtema.append(
        '<option value=0>'+res.message+'</option>'
      );
    }

    //alert("cambio");
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
          getTemaMateria();
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


    function seleccionarSubtema(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: 'php/subtemas/seleccionarSubtema.php',
        data: {
          idSubtema: id
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

        idSubtemaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtSubtemaE.val(o.subNombre);
              idSubtemaE.val(o.subId);

              slcTemaE.find('option').each(function(){
              if ( o.subTema == $(this).val() )
                slcTemaE.val(o.subTema);
              });

            });
        }else{
          txtSubtemaE.val(res.message);
        }
    }

    function editarSubtema(){
      var editar = $.ajax({
        url: 'php/subtemas/editarSubtema.php',
        data: {
          idSubtema:idSubtemaE.val(),
          nombreSubtema:txtSubtemaE.val(),
          idTema:slcTemaE.val()

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

function eliminarSubtema(id){
  var editar = $.ajax({
    url: 'php/subtemas/eliminarSubtema.php',
    data: {
      idSubtema:id
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
    title: "¿Seguro de eliminar el subtema seleccionada?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    eliminarSubtema(id);
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
  getMaterias();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarSubtema);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarSubtema);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarSubtema);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcMateria.on('change',getTemaMateria);
slcTema.on('change', getSubtemasTema);
