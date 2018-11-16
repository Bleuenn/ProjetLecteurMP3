<?php
/**
 * Created by PhpStorm.
 * User: Leveque_m
 * Date: 15/11/18
 * Time: 15:38
 */

include_once "model/DAO.php";

isset($_GET['titre']) ? $titre = $_GET['titre'] : $titre = null;

if(!is_null($titre)){

    $dao = new DAO();

    if($titre == "all"){
        $json = $dao->getAll();
    }
    else {
        try {
            $titre = str_replace(" ", "+", $titre);
            $json = $dao->getByTitle($titre);
        } catch (Exception $e) {
            echo $e->getMessage();
        }

    }

    $dao->close();

    echo $json;

}
else{
    include_once "view/affichage_donnees.php";
    include_once "view/maquette.php";
}

