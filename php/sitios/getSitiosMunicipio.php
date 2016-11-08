<?php
$idMunicipio=($_POST['idMunicipio']);

  if (isset($idMunicipio)) {

    include('ConsultasSitios.php');
    $ConsultasSitios = new ConsultasSitios;

    $sqlSelect=' SELECT s.sitId, s.sitNombre, s.sitCulturas, s.sitEmplazamiento, s.sitRegVhc, s.sitRegInah, s.sitArea, s.sitOcupacion, s.sitActividades, s.sitActividadTuristica, s.sitTuristica, s.sitPublico, s.sitMapa, c.culNombre, m.munNombre, e.entNombre, em.empNombre, SUBSTR(s.sitHistoria,1,120) AS sitHistoria ';
    $sqlFrom=' FROM sitios s, culturas c, municipios m, entidades e, emplazamientos em ';
    $sqlWhere=' WHERE m.munId='.$idMunicipio.' AND m.munEntidad=e.entId AND m.munId=s.sitMunicipios AND s.sitCulturas = c.culId AND s.sitEmplazamiento = em.empId GROUP BY s.sitId ORDER BY s.sitNombre; ';
    $consulta=$sqlSelect.$sqlFrom.$sqlWhere;

    $response = $ConsultasSitios -> consultaGetSitios($consulta);
  }
  else {
      $response = array(
        'status' => 'ERROR',
        'message'=>'Faltan parametros al solicitar petición'
      );
  }
  $jsonFinal = json_encode($response);
  echo $jsonFinal;

?>
