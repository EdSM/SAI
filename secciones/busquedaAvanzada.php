<div class="row">

    <div class="col-md-4">
      <span id="spnBuscar" class="hidden">
        <i class="fa fa-refresh fa-spin fa-2x text-primary"></i> <p>Buscando...</p>
      </span>
      <span id="spnListo">
        <p class="text-primary">

        </p>
      </span>
    </div>
  </div>

<div class="row">
  <div class="col-md-4">
      <label for="slctEntidad" class="col-md-3 text-right">Entidad:</label>
      <div class="col-md-8">
        <select name="" id="slctEntidad" class="form-control input-sm">
        </select>
      </div>
  </div>

  <div class="col-md-4">

      <label for="slctMunicipios" class="col-md-3 control-label text-right">Municipio:</label>
      <div class="col-md-8">
        <select name="" id="slctMunicipios" class="form-control input-sm">
          <option value="0">Todos</option>
        </select>
      </div>

  </div>

  <div class="col-md-4">
      <label for="slctCultura" class="col-md-4 control-label text-right">Cultura:</label>
      <div class="col-md-8">
        <select name="" id="slctCultura" class="form-control input-sm">

        </select>
      </div>

  </div>

</div>
<br>
<div class="row">
  <div class="col-md-2 col-md-offset-4 text-center">
    <button class="btn btn-success btn-sm btn-block" id="btnBuscar"><i class="fa fa-search"></i> Buscar</button>
  </div>
</div>

<br><br>
<div class="row" id="">
  <div class="col-md-12">

      <?php include("tablaResultados.php"); ?>

    <br>

</div>
</div>
