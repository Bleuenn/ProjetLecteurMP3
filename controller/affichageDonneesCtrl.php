<?php
include_once("model/DAO.php");
//Transfert de données à afficher
$dao = new DAO();

$json = $dao->getAll();

$dao->close();

echo $json;

