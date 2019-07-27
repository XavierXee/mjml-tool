<?php
include("connexion.php");

$resultat = $conn->query('SELECT * FROM mjml');
$items = $resultat->fetchAll();


foreach ($items as $item) {
        echo $item['brand']." ".$item['type']."<br>";
        include('vue.php');}


?>
