<?php
/**
 * Created by PhpStorm.
 * User: Leveque_m
 * Date: 15/11/18
 * Time: 15:38
 */

include_once "model/DAO.php";

isset($_GET['page']) ? $page = $_GET['page'] : $page = null;

if($page === null){
    include_once "view/maquette.php";
}
else{
    switch ($page){
        case "admin" :
            include_once "controller/admin.ctrl.php";
            break;
        case "edit" :
            include_once "controller/admin.edit.ctrl.php";
            break;
        default :
            include_once "view/maquette.php";
    }
}

/*

isset($_GET['titre']) ? $titre = $_GET['titre'] : $titre = null;

if(!is_null($titre)){



}
else{
    include_once "view/maquette.php";
}
*/

