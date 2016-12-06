var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtCuestionario=$('#txtCuestionario'),
    txtCuestionarioE=$('#txtCuestionarioE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idSubtemaE=$('#idSubtemaE'),
    slcTemaE=$('#slcTemaE'),
    slcMateria=$('#slcMateria'),
    slcTema=$('#slcTema'),
    slcCuestionario=$('#slcCuestionario');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');


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


      slcTema.html('');
      slcTemaE.html('');
      slcTema.append(
                  '<option value=0>Seleccione un tema</option>'
        );
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcTema.append(
               '<option value='+o.temId+'>'+o.temNombre+'</option>'
             );
             slcTemaE.append(
               '<option value='+o.temId+'>'+o.temNombre+'</option>'
             );


         });

        }else{
          slcTema.append(
            '<option value=0>'+res.message+'</option>'
          );
        }
    }

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

        slcTema.html('');
        slcTemaE.html('');
        slcTema.append(
          '<option value=0>Seleccione un tema</option>'
        );

        if ( res.status === 'OK' ){

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
          slcTemaE.append(
            '<option value=0>'+ res.message+'</option>'
          );

        }
    }

    function agregarCuestionario(){
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: 'php/cuestionarios/agregarCuestionario.php',
        data: {
          nombreCuestionario:txtCuestionario.val()
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
          getCuestionarios();
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


function getCuestionarios(){
  var datos = $.ajax({
    url: 'php/cuestionarios/getTodoCuestionarios.php',
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

    slcCuestionario.html('');
    slcCuestionario.append(
      '<option value=0>Seleccione un cuestionario</option>'
    );

    if ( res.status === 'OK' ){

       $.each(res.data, function(k,o){

         slcCuestionario.append(
           '<option value='+o.cueId+'>'+o.cueNombre+'</option>'
         );

     });

    }else{
      slcTemaE.append(
        '<option value=0>'+res.message+'</option>'
      );
    }

    //alert("cambio");
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
             '<td class="">'+o.temNombre+'</td>'+


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

        txtCuestionarioE.val('');

        idSubtemaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtCuestionarioE.val(o.subNombre);
              idSubtemaE.val(o.subId);

              slcTemaE.find('option').each(function(){
              if ( o.subTema == $(this).val() )
                slcTemaE.val(o.subTema);
              });

            });
        }else{
          txtCuestionarioE.val(res.message);
        }
    }

    function editarSubtema(){
      var editar = $.ajax({
        url: 'php/subtemas/editarSubtema.php',
        data: {
          idSubtema:idSubtemaE.val(),
          nombreSubtema:txtCuestionarioE.val(),
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
  txtCuestionario.val('');
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
    slcMateria.append(
     '<option value=0>Seleccione una materia</option>'
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
       '<option value=0>'+res.message +'</option>'
     );
    }
}

function validar(){
  if ((txtCuestionario.val()==null)||(txtCuestionario.val()=='')) {
    txtCuestionario.focus();
    swal("Debe ingresar el nombre del subtema.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
//  getSubtemas();
//  getTemas();
  getCuestionarios();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarCuestionario);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarSubtema);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarSubtema);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcTema.on('change',getCuestionarios);
slcMateria.on('change', getTemaMateria)
