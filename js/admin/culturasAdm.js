var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var txtTema=$('#txtTema'),
    txtPagina=$('#txtPagina'),
    slcLibro=$('#slcLibro');
var tbodyRegistros=$('#tbodyRegistros'),
    tableRevistas=$('#tableRevistas'),
    tblRegistros=$('#tblRegistros');
var txtCultura=$('#txtCultura'),

    txtPaginaE=$('#txtPaginaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idN1E=$('#idN1E');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

    var idCulturaE=$('#idCulturaE'),
    nombreCulturaE=$('#nombreCulturaE');

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

    tbodyRegistros.html('');
    if ( res.status === 'OK' ){

       var i = 1;
       $.each(res.data, function(k,o){

         tbodyRegistros.append(
           '<tr>'+
             '<td class="">'+i+'</td>'+
             '<td class="">'+o.culId+'</td>'+
             '<td class="">'+o.culNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.culId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.culId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
             '</i></td>'+

           '</tr>'
       );
       i++

     });

    }else{
      tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
    }
}
  /*  function getNivel1(){
      var datos = $.ajax({
        url: '../php/captura/getN1.php',
        data: {
          idLibro: slcLibro.val()
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
                '<td class="col-md-8">'+o.unoTitulo+'</td>'+
                '<td class="col-md-1">'+o.unoPagina+'</td>'+

                '<td class="text-center">'+
                  '<i id='+o.unoId+' class="fa fa-sort-amount-desc text-primary" aria-hidden="true" style="cursor:pointer" title="Agregar nivel 2">'+
                '</i></td>'+

                '<td class="text-center">'+
                  '<span class="glyphicon glyphicon-edit text-primary" id="'+o.unoId+'" '+
                  'style="cursor:pointer" title="Editar"></span>'+
                '</td>'+

                '<td class="text-center">'+
                '<i id='+o.unoId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
                '</i></td>'+

              '</tr>'
          );
          i++;
          });
        }else{
          tbodyRegistros.html('<tr><td colspan="8" class="center"><h3>'+ res.message +'</h3></td></tr>');
        }
        sessionStorage.setItem("libro", slcLibro.val());
    }
*/
function agregarCultura(){
  if (!validar()) {
    return false;
  }
  var editar = $.ajax({
    url: '../php/culturas/agregarCultura.php',
    data: {
      nombreCultura:txtCultura.val()
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
      getCulturas();
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


    function seleccionarCultura(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: '../php/culturas/seleccionarCultura.php',
        data: {
          idCultura: id
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

        idCulturaE.val('');
        txtPaginaE.val('');
        idN1E.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              idCulturaE.val(o.culId);
              nombreCulturaE.val(o.culNombre);
            });
        }else{
          nombreCulturaE.val(res.message);
        }
    }


    function editarCultura(){
      var editar = $.ajax({
        url: '../php/culturas/editarCultura.php',
        data: {
          idCultura:idCulturaE.val(),
          nombreCultura:nombreCulturaE.val(),

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
          getCulturas();
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
  txtCultura.val('');
}


/*

function verificarSeleccion(){
  SElibro=sessionStorage.getItem("libro");
  if (SElibro != null) {

      slcLibro.find('option').each(function(){
        if ( SElibro == $(this).val() )
          slcLibro.val(SElibro);
      });

      getNivel1();
  }
}
*/
/*
function agresarN2(){
  var id = $(this).attr('id');
  sessionStorage.setItem("n1", id);
  location.href="ingrersarNivel2.php";
}
*/

function eliminarCultura(id){
  var editar = $.ajax({
    url: '../php/culturas/eliminarCultura.php',
    data: {
      idCultura:id
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
      getCulturas();
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
    title: "¿Seguro de eliminar la cultura seleccionado?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    //swal("Deleted!", "Your imaginary file has been deleted.", "success");
    eliminarCultura(id);
  });
}

/*
function cancelarIngreso(){
  location.href="../captura/verIndice.php";
}
*/

function validar(){
  console.log("validar");
  if ((txtCultura.val()==null)||(txtCultura.val()=='')) {
    txtCultura.focus();
    swal("Debe ingresar el nombre de la cultura.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getCulturas();
  //getLibros();
  //verificarSeleccion();
  //getNivel1();
});

//slcLibro.on( "change", getNivel1 );
btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarCultura);
//btnCancelar.on('click',cancelarIngreso);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarCultura);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarCultura);
//tbodyRegistros.delegate('.fa-sort-amount-desc', 'click', ingresarN2);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
