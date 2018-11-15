<?php
/**
 * Created by PhpStorm.
 * User: Leveque_m
 * Date: 15/11/18
 * Time: 15:38
 */

$action = $_GET['action'] ? $_GET['action'] : null;

switch($action){
    case "all" :
        include_once'controller/affichageDonneesCtrl.php';
        break;
    default:
        echo "<H1>Erreur page not found</H1>";
}