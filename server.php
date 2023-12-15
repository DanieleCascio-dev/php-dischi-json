<?php 
/* Prelevo dati dal file */
$string = file_get_contents("dischi.json");

/* LOGICA */

/* trasformo stringa in array */
$dischi = json_decode($string, true);

/* Operazioni sui dati */
if(isset($_GET['id'])){
  $selected_disk = $dischi[$_GET['id']];
  $json= json_encode($selected_disk);
}else{

  /* trasformo dati array in stringa */
  $json = json_encode($dischi);
}



/* Invio dati al client */
header("Content-Type: application/json");
echo $json;