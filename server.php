<?php 
/* Prelevo dati dal file */
$string = file_get_contents("dischi.json");

/* trasformo stringa in array */
$dischi = json_decode($string, true);
var_dump($dischi);

/* Operazioni sui dati */


/* trasformo dati array in stringa */
$json = json_encode($dischi);

/* Invio dati al client */
header("Content-Type: application/json");
echo $json;