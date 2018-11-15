<?php
/**
 * Created by PhpStorm.
 * User: Leveque_m
 * Date: 15/11/18
 * Time: 15:38
 */

include_once "model/DAO.php";

if (isset($titre)) {
    $titre = $_GET['titre'] ? $_GET['titre'] : null;
};



if(!is_null($titre)){

    //Transfert de données à afficher
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
}

