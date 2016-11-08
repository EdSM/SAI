var slcCliente=$('#slcCliente'),
    slcCuestionario=$('#slcCuestionario'),
    txtFecha=$('#txtFecha'),
    btnAsignar=$('#btnAsignar');

    function getClientes(){
      var datos = $.ajax({
        url: 'php/clientes/getTodoClientes.php',
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
        slcCliente.html('');
        slcCliente.append(
          '<option value=0>Seleccione un cliente</option>'
        );

      //  tbodyRegistros.html('');
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcCliente.append(
               '<option value="'+o.entId+'">'+o.entNombre+'</option>'
           );
           i++

         });

        }else{
          slcCliente.append(
            '<option value=0>'+ res.message+'</option>'
          );

        }
    }

    function getCuestionarios(){
      var datos = $.ajax({
        url: 'php/cuestionarios/getTodoCuestionario.php',
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

      //  tbodyRegistros.html('');
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcCuestionario.append(
               '<option value="'+o.entId+'">'+o.entNombre+'</option>'
           );
           i++

         });

        }else{
          slcCuestionario.append(
            '<option value=0>'+ res.message+'</option>'
          );

        }
    }

    function agregarAplicacion(){
      
      if (!validar()) {
        return false;
      }
      var editar = $.ajax({
        url: '../php/municipios/agregarMunicipio.php',
        data: {
          idCliente : slcCliente.val(),
          idCuestionario : slcCuestionario.val(),
          fecha:txtFecha.val()
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
          getMunicipios();
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

function validar(){
  if (slcCliente.val() == 0) {
      alert("Debe seleccionar un cliente.")
      slcCliente.focus();
      return false;
  }
  if (slcCuestionario.val() == 0) {
      alert("Debe seleccionar un cuestionario.")
      slcCuestionario.focus();
      return false;
  }
  if (fecha.val() == 0) {
      alert("Debe ingresar una fecha de aplicación.")
      fecha.focus();
      return false;
  }

}

$(document).on('ready', function(){
  getClientes();
  getCuestionarios();
});
btnAsignar.on('click', agregarAplicacion);
