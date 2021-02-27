<?php>

$nombre = $_POST['Nombre'];
$Correo = $_POST['correo'];
$Telefono = $_POST['telefono'];
$Mensaje = $_POST['Mensaje'];


$destinatario = "mtzmartin706@gmail.com";
$asunto ="Contacto desde portafolio web";

$Carta ="De: $nombre \n" ;
$Carta .="Correo: $Correo \n" ;
$Carta .="Teléfono: $Telefono \n" ;
$Carta .="Mensaje: $Mensaje \n" :

mail($destinatario, $asunto, $Carta);

    <?>