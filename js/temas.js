var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var tbodyRegistros=$('#tbodyRegistros'),
    tblRegistros=$('#tblRegistros');
var txtTema=$('#txtTema'),
    txtTemaE=$('#txtTemaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idTemaE=$('#idTemaE'),
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
    slcMateria.append(
     '<option value=0>Seleccione una materia</option>'
   );
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
      slcMateria.append(
       '<option value=0>'+res.message+'</option>'
     );
    
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

function getTemaMaretia(){
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


    function seleccionarTema(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: 'php/temas/seleccionarTema.php',
        data: {
          idTema: id
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

        idTemaE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtTemaE.val(o.temNombre);
              idTemaE.val(o.temId);

              slcMateriaE.find('option').each(function(){
              if ( o.temMateria == $(this).val() )
                slcMateriaE.val(o.temMateria);
              });

            });
        }else{
          txtTemaE.val(res.message);
        }
    }

    function editarTema(){
      var editar = $.ajax({
        url: 'php/temas/editarTema.php',
        data: {

          nombreTema:txtTemaE.val(),
          idMateria:slcMateriaE.val(),
          idTema:idTemaE.val(),
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
  //getTemas();
  getMaterias();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarTema);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarTema);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarTema);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcMateria.on('change',getTemaMaretia);
