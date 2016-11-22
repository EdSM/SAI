var txtNombre=$('#txtNombre'),
    txtNombreAnterior=$('#txtNombreAnterior'),
    txtDomicilio=$('#txtDomicilio'),
    txtNumero=$('#txtNumero'),
    txtCalle=$('#txtCalle'),
    txtMunicipio=$('#txtMunicipio'),
    txtEntidad=$('#txtEntidad'),
    txtTelefono=$('#txtTelefono'),
    txtFax=$('#txtFax'),
    txtCorreo=$('#txtCorreo'),
    txtRegCamComercio=$('#txtRegCamComercio'),
    txtRfc=$('#txtRfc'),
    txtInfonavit=$('#txtInfonavit'),
    txtHistoria=$('#txtHistoria'),
    txtEstudios=$('#txtEstudios');
  var btnGuardar=$('#btnGuardar');

    function agregarCliente(){

    /*  if (!validar()) {
        return false;
      }*/
      var editar = $.ajax({
        url: 'php/clientes/agregarCliente.php',
        data: {
              nombre:txtNombre.val(),
              nombreAnterior:txtNombreAnterior.val(),
              domicilio:txtDomicilio.val(),
              numero:txtNumero.val(),
              calle:txtCalle.val(),
              municipio:txtMunicipio.val(),
              entidad:txtEntidad.val(),
              telefono:txtTelefono.val(),
              fax:txtFax.val(),
              correo:txtCorreo.val(),
              regCamComercio:txtRegCamComercio.val(),
              rfc:txtRfc.val(),
              infonavit:txtInfonavit.val(),
              historia:txtHistoria.val(),
              estudios:txtEstudios.val()

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
        /*  limpiar();
          getMunicipios();
          swal({
            title: "",
            text: " ",
            timer: 700,
            type: "success",
            showConfirmButton: true
          });*/
          alert("Se guardo correctamente el cliente")
        }
        else {
          swal({
            alert( resultado.message);
          });
        }
    }

    btnGuardar.on('click',agregarCliente);
