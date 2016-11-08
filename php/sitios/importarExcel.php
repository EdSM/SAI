<?php
ini_set("memory_limit","16M");
$submit = $_POST['submit'];
$archivo = $_FILES['_archivo']['name'];

      if ( isset($submit) ) {
          $_name=$_FILES["_archivo"]["name"];
          $_type=$_FILES["_archivo"]["type"];
          $_size=$_FILES["_archivo"]["size"];
          $_temp=$_FILES["_archivo"]["tmp_name"];
          $uploads_dir = './carga';
          $archivo_dir = "$uploads_dir/$archivo";
          $consultaEn = false;

          $chk_ext = explode(".",$_name);

          if((strtolower(end($chk_ext)) == "xlsx") || (strtolower(end($chk_ext)) == "xls")){

              move_uploaded_file($_temp, $archivo_dir);
              require_once '../../Classes/PHPExcel/IOFactory.php';

              $objPHPExcel = PHPExcel_IOFactory::load($archivo_dir);
              include('../ConsultasSql.php');
              $Consultas = new Consultas;
              $Consultas -> validarSesion();
              $sqlInsert ="insert into sitios (sitNombre, sitCulturas, sitRegInah, sitRegVhc, sitMunicipios, sitArea, sitEmplazamiento, sitActividades, sitOcupacion, sitHistoria, sitTuristica,	sitActividadTuristica, sitPublico,	sitClave, sitMapa) ";


              foreach ($objPHPExcel->getWorksheetIterator() as $worksheet) {
                $worksheetTitle     = $worksheet->getTitle();
                $highestRow         = $worksheet->getHighestRow(); // e.g. 10
                $highestColumn      = $worksheet->getHighestColumn(); // e.g 'F'
                $highestColumnIndex = PHPExcel_Cell::columnIndexFromString($highestColumn);
                $nrColumns = ord($highestColumn) - 64;
                echo "Archivo: ".$_name."<br>";
                echo "<br>Hoja: ".$worksheetTitle."<br>";
                echo 'Columnas: '.$nrColumns.' (A-' . $highestColumn . ') <br>';
                echo 'Filas: ' . $highestRow;
                echo '<br><br>Información: <table border="1"><tr>';

                for ($row = 1; $row <= $highestRow; ++ $row) {
                  echo '<tr>';
                  echo '<td>'.$row.'</td>';
                  $sqlValues = " values ( ";                                       //sqlValues almacena valores por columna
                  for ($col = 0; $col < $highestColumnIndex; ++ $col) {
                    $cell = $worksheet->getCellByColumnAndRow($col, $row);
                    $val = $cell->getValue();



                  //  echo '<td>' . $val . '<br></td>';
                  if ($row > 1) {

                    $consultaEn=true;
                      if($col == 0){                                //  sitNombre
                         echo '<td>' . $val . '<br></td>';
                         $sqlValues = $sqlValues." '". $val ."',";

                      }
                     if($col == 1){                            //  sitCulturas
                         echo '<td>' . $val . '<br></td>';
                         $sqlValues = $sqlValues." ". $val .",";

                       }
                     if($col == 2){                               //  sitRegInah
                         echo '<td>' . $val . '<br></td>';
                         $sqlValues = $sqlValues." '". $val ."',";
                       }

                    if($col == 3){                             //  sitRegVhc
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." '". $val ."',";
                        $sentenciaVerDuplicados = "SELECT sitId FROM sitios WHERE sitRegVhc = '".$val."';";
                      }

                    if($col == 4){                             //  sitEstado
                        echo '<td>' . $val . '<br></td>';
                        //$sqlValues = $sqlValues." ". $val .",";

                      }
                    if($col == 5){                                 //  sitMunicipios
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." ". $val .",";

                      }
                    if($col == 6){                              //  sitArea
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." '". $val ."',";

                      }
                    if($col == 7){                                //  sitEmplazamiento
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." ". $val .",";

                      }
                    if($col == 8){                               //  sitActividades
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." '". $val ."',";

                      }
                    if($col == 9){                             //  sitOcupacion
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." '". $val ."',";

                      }
                    if($col == 10){                            //  sitHistoria
                        echo '<td>' . $val . '<br></td>';
                        $sqlValues = $sqlValues." '". $val ."',";
                      }

                    if($col == 11){                               //  sitTuristica
                          echo '<td>' . $val . '<br></td>';
                          $sqlValues = $sqlValues." '". $val ."',";
                        }

                    if($col == 12){                             //  sitActividadTuristica
                          echo '<td>' . $val . '<br></td>';
                          $sqlValues = $sqlValues." '". $val ."',";
                        }

                    if($col == 13){                                 //  sitPublico
                          echo '<td>' . $val . '<br></td>';
                          $sqlValues = $sqlValues." ". $val .",";
                        }

                    if($col == 14){                             //  sitClave
                          echo '<td>' . $val . '<br></td>';
                          $sqlValues = $sqlValues." '". $val ."',";
                        }

                    if($col == 15){                             //  sitMapa
                          echo '<td>' . $val . '<br></td>';
                          $sqlValues = $sqlValues." '". $val ."'";
                        }


                    }
                    else{
                      echo '<td>' . $val . '<br></td>';
                    }

                  }

                  if ($consultaEn) {
                      $nRepetidos = $Consultas ->verificarRepeticion($sentenciaVerDuplicados);
                      echo '<td>' . $sentenciaVerDuplicados . '<br></td>';
                      echo '<td>' . $nRepetidos . '<br></td>';
                      if ($nRepetidos == 0) {
                        $consulta = $sqlInsert.$sqlValues." );  ";
                        echo '<td>' . $consulta . '<br></td>';
                        //$response =1;
                        $response = $Consultas -> consultaInsertEditEliminar($consulta);        //REALIZAR CONSULTA PARA INSERTAR REGISTROS
                      }
                  }





                  echo '</tr>';

                }
                echo '</table>';
              }




            /*  $response = array(
                'status' => 'OK',
                'message'=>'Correcto'
              );*/
          }
          else {
            $response = array(
              'status' => 'ERROR',
              'message'=>'Ingrese un tipo de archivo excel'
            );
          }

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
