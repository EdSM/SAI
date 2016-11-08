var btnAgregar = $('#btnAgregar'),
    btnCancelar = $('#btnCancelar'),
    btnLimpiar=$('#btnLimpiar');
var txtTema=$('#txtTema'),
    txtPagina=$('#txtPagina'),
    slcLibro=$('#slcLibro');
var tbodyRegistros=$('#tbodyRegistros'),
    tableRevistas=$('#tableRevistas'),
    tblRegistros=$('#tblRegistros');
var txtEmplazamiento=$('#txtEmplazamiento'),
    txtEmplazamientoE=$('#txtEmplazamientoE'),
    txtPaginaE=$('#txtPaginaE'),
    btnAgregarE=$('#btnAgregarE'),
    btnCancelarE=$('#btnCancelarE'),
    idEmplazamientoE=$('#idEmplazamientoE');
var formEditar=$('#formEditar'),
    frmAgregar=$('#frmAgregar');

function getEmplazamiento(){
  var datos = $.ajax({
    url: '../php/emplazamiento/getTodoEmplazamiento.php',
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
             '<td class="">'+o.empId+'</td>'+
             '<td class="">'+o.empNombre+'</td>'+

             '<td class="text-center">'+
               '<span class="glyphicon glyphicon-edit text-primary" id="'+o.empId+'" '+
               'style="cursor:pointer" title="Editar"></span>'+
             '</td>'+

             '<td class="text-center">'+
             '<i id='+o.empId+' class="fa fa-trash text-danger" aria-hidden="true" style="cursor:pointer" title="eliminar">'+
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
    function agregarEmplazamiento(){
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: '../php/emplazamiento/agregarEmplazamiento.php',
        data: {
          nombreEmplazamiento:txtEmplazamiento.val(),
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
          getEmplazamiento();
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

        //alert(resultado.message);
    }


  function seleccionarEmplazamiento(){
      frmAgregar.addClass('hidden');
      formEditar.removeClass('hidden');
      tblRegistros.addClass('hidden');
      var id = $(this).attr('id');
      var datos = $.ajax({
        url: '../php/emplazamiento/seleccionarEmplazamiento.php',
        data: {
          idEmplazamiento: id
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

        txtEmplazamientoE.val('');
        idEmplazamientoE.val('');
        if ( res.status === 'OK' ){
            $.each(res.data, function(k,o){
              txtEmplazamientoE.val(o.empNombre);
              idEmplazamientoE.val(o.empId);
            });
        }else{
          txtEmplazamientoE.val(res.message);
        }
    }

    function editarEmplazamiento(){
      //var id = $(this).attr('id');
      var editar = $.ajax({
        url: '../php/emplazamiento/editarEmplazamiento.php',
        data: {
        //  token:          token.val(),
          idEmplazamiento:idEmplazamientoE.val(),
          nombreEmplazamiento:txtEmplazamientoE.val(),
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
          getEmplazamiento();
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

        //alert(resultado.message);
    }


function cancelarEditar(){
  formEditar.addClass('hidden');
  frmAgregar.removeClass('hidden');
  tblRegistros.removeClass('hidden');
}



function limpiar(){
  txtEmplazamiento.val('');
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

function eliminarEmplazamiento(id){
  var editar = $.ajax({
    url: '../php/emplazamiento/eliminarEmplazamiento.php',
    data: {
      idEmplazamiento:id
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
      getEmplazamiento();
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
    title: "¿Seguro de eliminar el emplazamiento seleccionado?",
    text: "",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Sí, eliminar",
    closeOnConfirm: false
  },
  function(){
    //swal("Deleted!", "Your imaginary file has been deleted.", "success");
    eliminarEmplazamiento(id);
  });
}

/*
function cancelarIngreso(){
  location.href="../captura/verIndice.php";
}
*/

function validar(){
  console.log("validar");
  if ((txtEmplazamiento.val()==null)||(txtEmplazamiento.val()=='')) {
    txtEmplazamiento.focus();
    swal("Debe ingresar el nombre del emplazamiento.")
    return false;
  }

  return true;
}

$(document).on('ready', function(){
  getEmplazamiento();
  //getLibros();
  //verificarSeleccion();
  //getNivel1();
});

//slcLibro.on( "change", getNivel1 );
btnLimpiar.on('click',limpiar);
btnAgregar.on('click',agregarEmplazamiento);
//btnCancelar.on('click',cancelarIngreso);

btnCancelarE.on('click',cancelarEditar);
btnAgregarE.on('click',editarEmplazamiento);

tbodyRegistros.delegate('.glyphicon-edit', 'click', seleccionarEmplazamiento);
//tbodyRegistros.delegate('.fa-sort-amount-desc', 'click', ingresarN2);
tbodyRegistros.delegate('.fa-trash', 'click', eliminar);
