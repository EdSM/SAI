<?php
  //require_once '../../Classes/PHPExcel.php';
  require_once '../../Classes/PHPExcel/IOFactory.php';
  $objPHPExcel = new PHPExcel();

  $objPHPExcel->getProperties()->setCreator("Nemachtilo") // Nombre del autor
    ->setLastModifiedBy("Nemachtilo") //Ultimo usuario que lo modificó
    ->setTitle("Plantilla para importar sitios") // Titulo
    ->setSubject("Plantilla para importar sitios") //Asunto
    ->setDescription("Plantilla para importar sitios") //Descripción
    ->setKeywords("plantilla sitios") //Etiquetas
    ->setCategory("Plantilla excel"); //Categorias

    //Titulos de las columnas
    $titulosColumnas = array('NOMBRE_SITIO', 'CULTURA', 'REGISTRO_INAH', 'REGISTRO_VHC', 'ESTADO', 'MINICIPIO', 'AREA_SITIO_oM2', 'EMPLAZAMIENTO', 'CONTEXTO_ACTIVIDADES', 'PERIODO_OCUPACION', 'HISTORIA_CULTURA', 'INFORMACION_TURISTICA', 'ACTIVIDADES_TURISTICAS', 'ABIERTO_AL_PUBLICO', 'PALABRAS_CLAVE', 'MAPA' );

    // Se agregan los titulos del reporte
    $objPHPExcel->setActiveSheetIndex(0)          //selecciona la hoja
      ->setCellValue('A1',  $titulosColumnas[0]) // asigna el contenido a cadd celda
      ->setCellValue('B1',  $titulosColumnas[1])
      ->setCellValue('C1',  $titulosColumnas[2])
      ->setCellValue('D1',  $titulosColumnas[3])
      ->setCellValue('E1',  $titulosColumnas[4])
      ->setCellValue('F1',  $titulosColumnas[5])
      ->setCellValue('G1',  $titulosColumnas[6])
      ->setCellValue('H1',  $titulosColumnas[7])
      ->setCellValue('I1',  $titulosColumnas[8])
      ->setCellValue('J1',  $titulosColumnas[9])
      ->setCellValue('K1',  $titulosColumnas[10])
      ->setCellValue('L1',  $titulosColumnas[11])
      ->setCellValue('M1',  $titulosColumnas[12])
      ->setCellValue('N1',  $titulosColumnas[13])
      ->setCellValue('O1',  $titulosColumnas[14])
      ->setCellValue('P1',  $titulosColumnas[15]);


    

      for($i = 'A'; $i <= 'P'; $i++){
        $objPHPExcel->setActiveSheetIndex(0)->getColumnDimension($i)->setAutoSize(TRUE);
      }

      //renombrar hoja
      $objPHPExcel->getActiveSheet()->setTitle('Plantilla');

      // Establecer la hoja activa, para que cuando se abra el documento se muestre primero.
      $objPHPExcel->setActiveSheetIndex(0);

      // Se modifican los encabezados del HTTP para indicar que se envia un archivo de Excel.

      // Se manda el archivo al navegador web, con el nombre que se indica, en formato 2007
      header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      header('Content-Disposition: attachment;filename="plantillaSitios.xlsx"');
      header('Cache-Control: max-age=0');

      $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
      $objWriter->save('php://output');
      exit;


?>
