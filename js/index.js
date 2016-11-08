var slcCliente=$('#slcCliente'),
    slcCuestionario=$('#slcCuestionario'),
    txtFecha=$('#txtFecha');

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
          '<option value=0>Seleccione una entidad para ver municipios</option>'
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


$(document).on('ready', function(){
  getClientes();
});
