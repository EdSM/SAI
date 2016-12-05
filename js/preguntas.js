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
    txtPregunta=$('#txtPregunta'),
    chkRespuesta=$('#chkRespuesta'),
    txtRespuesta=$('#txtRespuesta'),
    rdoRespuesta = document.getElementsByName("rdoRespuesta");

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

        slcCategoria.html('');
        slcCategoria.append(
          '<option value=0>Seleccionar una categoría de pregunta</option>'
        );
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcCategoria.append(
               '<option value='+o.catId+'>'+o.catNombre+'</option>'
             );

         });

        }else{
          slcCategoria.append(
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
    function getRadioButtonSelectedValue(){
        for(i=0;i<rdoRespuesta.length;i++)
            if(rdoRespuesta[i].checked) return rdoRespuesta[i].value;
    }

    function agregarPregunta(){
    /*  if (!validar()) {
        return false;
      }*/
      valorRadio = getRadioButtonSelectedValue();
      alert(valorRadio);
    /*  var editar = $.ajax({
        url: 'php/preguntas/agregarPregunta.php',
        data: {
          nombrePregunta:txtPregunta.val(),
          idSubtema:slcSubtema.val(),
          idCategoria:slcCategoria.val()
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
          getPreguntasSubtema();
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
        */
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

    function getPreguntasSubtema(){
      var datos = $.ajax({
        url: 'php/preguntas/getPreguntasSubtema.php',
        data:{
          idSubtema: slcSubtema.val()
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
                 '<td class="">'+o.preId+'</td>'+
                 '<td class="">'+o.preOracion+'</td>'+
                 '<td class="">'+o.subNombre+'</td>'+
                 '<td class="">'+o.catNombre+'</td>'+
                 '<td class="text-center">'+
                   '<span class="glyphicon glyphicon-edit text-primary" id="'+o.preId+'" '+
                   'style="cursor:pointer" title="Editar"></span>'+
                 '</td>'+

                 '<td class="text-center">'+
                 '<i id='+o.preId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
                 '</i></td>'+

               '</tr>'

           );
           i++

         });

        }else{
          tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');

        }

        //alert("cambio");
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
  txtPregunta.val('');
}

function verificaEdoCheck(){
  if (chkRespuesta.is(':checked')) {
    txtRespuesta.prop('disabled', true);
    txtRespuesta.val('');
  }
  else {
    txtRespuesta.prop('disabled', false);
  }
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
  if (slcMateria.val()==0) {
  //  txtSubtema.focus();
    swal("Debe seleccionar una materia.");
    slcMateria.focus();
    return false;
  }
  if (slcTema.val()==0) {
    swal("Debe seleccionar un tema.");
    slcTema.focus();
    return false;
  }
  if (slcSubtema.val()==0)  {
    swal("Debe seleccionar un subtema.")
    slcSubtema.focus();
    return false;
  }
  if (slcCategoria.val()==0) {
    swal("Debe seleccionar una categoría de pregunta.")
    slcCategoria.focus();
    return false;
  }
  return true;
}

$(document).on('ready', function(){
  getMaterias();
  getCategorias();
});

btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarPregunta);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarSubtema);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarSubtema);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);

slcMateria.on('change',getTemaMateria);
slcTema.on('change', getSubtemasTema);
slcSubtema.on('change', getPreguntasSubtema);

chkRespuesta.on('click', verificaEdoCheck);
