<?php
use Model\DAO;

/*
 * Initialisation des paramètres GET.
 */
!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;
!empty($_GET['json']) ? $json = $_GET['json'] : $json = null;

//Initialisation de la connexion à la bdd
$dao = new DAO();

/*
 *  Affichage d'un morceau selon sont ID
 */
if(!is_null($id)){
    $morceau = $dao->getById($id);
    $dao->close();

    /*
     *  Affichage des données JSON
     */
    if($json){
        echo $morceau;
    }
}
/*
 *  Affichage de tous les morceaux
 */
else{
    $morceaux = $dao->getAll();
    $dao->close();

    /*
     *  Affichage des données : JSON
     */
    if(!is_null($json)){
        echo $morceaux;
    }
    /*
     *  Affichage des données : HTML
     */
    else{
        $TABLEAU = null;
        $morceaux = json_decode($morceaux);
        if(is_object($morceaux)){
            foreach ($morceaux->_embedded as $morceau){

                $titre = $morceau->titre;
                $album = $morceau->album;
                $artiste = $morceau->artiste;
                $date = $morceau->annee;

                $TABLEAU .= "<tr>";
                $TABLEAU .= "<td>$titre</td>";
                if($album === null){
                    $TABLEAU .= "<td class='undefined'>$album</td>";
                }
                else{
                    $TABLEAU .= "<td>$album</td>";
                }
                $TABLEAU .= "<td>$artiste</td>";
                $TABLEAU .= "<td>$date</td><td><a href='?page=edit&id=".$morceau->_id->{'$oid'}."'>Modifer</a></td><td><a href='?page=delete&id=".$morceau->_id->{'$oid'}."'>Supprimer</a></td>";
                $TABLEAU .= "</tr>";
            }
        }

        include_once "view/admin.php";
    }
}

