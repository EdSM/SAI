var slcCliente=$('#slcCliente'),
    slcCuestionario=$('#slcCuestionario'),
    txtFecha=$('#txtFecha'),
    btnAsignar=$('#btnAsignar');
var btnAplicar=$('#btnAplicar'),
    iniciarCuestionario=$('#iniciarCuestionario'),
    pnlCheck = $('#pnlCheck');
var pregunta = document.getElementById("pregunta");
var nPregunta=0,
    btnContinuar=$('#btnContinuar');

    var preguntas0 = ["1. Que haya presentado cambio de domicilio. ",
                     "2. Cambio de denominación.",
                     "3. Cambio de aumento o disminución de obligaciones, suspensión de actividades",
                     "4. Fusión.",
                     "5. Escisión.",
                     "6. Verificar que se hayan aprobado: balance General",
                     "7. Verificar que se hayan aprobado: estado de Resultados",
                     "8. Verificar que se hayan aprobado: notas explicativas",
                     "9. Verificar que se hayan aprobado: reporte de la gerencia",
                     "10. Verificar que se hayan aprobado: reporte de los comisarios",
                     "11. Verificar que la contabilidad se encuentre ubicada en su domicilio fiscal ",
                     "12. En otro lugar autorizado por las autoridades fiscales",
                     "13. Verificar que los sistemas y registros contables cumplan con los requisitos correspondientes",
                     "14. Verificar que conserven los registros de la contabilidad por lo menos de los últimos cinco años.",
                     "15. Verificar que se hayan presentado declaraciones anuales y provisionales del impuesto Sobre la Renta.",
                     "16. Verificar que se hayan dictaminado los estados financieros consolidados ",
                     "17. Verificar que se estén cumpliendo los demás requisitos de consolidación -arts. 57 y 58 de la Ley del Impuesto Sobre la Renta, entre otros.",
                     "18. Verificar si han presentado estados financieros dictaminados por los últimos cinco años ",
                     "19. Verificar si la empresa está siendo auditada por las autoridades fiscales ",
                     "20. Existencia de algún convenio al que se haya adherido el contribuyente con las autoridades fiscales"
                     ];


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
               '<option value="'+o.cliId+'">'+o.cliNombre+'</option>'
           );
           i++

         });

        }else{
          slcCliente.append(
            '<option value=0>'+ res.message+'</option>'
          );

        }
    }

    function getAplicacionCliente(){
      var datos = $.ajax({
        url: 'php/aplicacion/getAplicacionPCliente.php',
        data:{
          idCliente : slcCliente.val(),
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
        slcCuestionario.html('');
        slcCuestionario.append(
          '<option value=0>Seleccione un cuestionario</option>'
        );

      //  tbodyRegistros.html('');
        if ( res.status === 'OK' ){

           var i = 1;
           $.each(res.data, function(k,o){

             slcCuestionario.append(
               '<option value="'+o.aplId+'">'+o.cueNombre+' - '+o.aplFechaAplicacion+'</option>'
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
        url: 'php/aplicacion/agregarAplicacion.php',
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
          alert(resultado.message);
        }
        else {
          alert(resultado.message);
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
  if (txtFecha.val() == 0) {
      alert("Debe ingresar una fecha de aplicación.")
      txtFecha.focus();
      return false;
  }
return true;
}

// ******************************************************* A P L I C A R ***********************************

function aplicarCuestionario(){
  pnlCheck.removeClass('hidden');
  mostrarPreguntas();
}

function mostrarPreguntas(){
  if (nPregunta <20) {


  pregunta.innerHTML = preguntas0[nPregunta];
  nPregunta++;
  pregunta1.innerHTML = preguntas0[nPregunta];
  nPregunta++;
  pregunta2.innerHTML = preguntas0[nPregunta];
  nPregunta++;
  pregunta3.innerHTML = preguntas0[nPregunta];
  nPregunta++;
  pregunta4.innerHTML = preguntas0[nPregunta];
  nPregunta++;
  }
  else {
    
  }
}

$(document).on('ready', function(){
  getClientes();
});
btnAplicar.on('click', aplicarCuestionario);
slcCliente.change(getAplicacionCliente);
btnContinuar.on('click', mostrarPreguntas);
