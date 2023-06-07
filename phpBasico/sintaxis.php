<?php
    echo "Hola, mamá estoy programando con PHP \n";

    $nombre = "Carlos";
    $apellido = "Santana";

    echo "No, no. Yo me llamo" . $nombre . " " . $apellido . "\n"; // concatenar forma lenta 
    echo "No, no. Yo me llamo $nombre $apellido \n"; // concatenar forma rapida 
    echo "El resultado de 4 x 5 es " . (4 * 5) . "\n"; // concatenar números 

    //DEBUGIN
    $personas = [
        "Carlos" => 22,
        "Mr. Michi" => 15,
        "Juan" => 65
    ];

    var_dump($personas); // inspeccionar todo el contenido de la variable, aporta más informacion
    print_r($personas)
?>