<?php
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
        case "add" :
            include_once "controller/admin.add.ctrl.php";
            break;
        case "edit" :
            include_once "controller/admin.edit.ctrl.php";
            break;
        case "delete" :
            include_once "controller/admin.delete.ctrl.php";
            break;
        default :
            include_once "view/maquette.php";
    }
}

