<?php
$dao = new DAO();
$json = $dao->getAll();
$dao->close();

$morceaux = json_decode($json);

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
    $TABLEAU .= "<td>$date</td><td><a href='?page=edit&id=".$morceau->_id->{'$oid'}."'>Modifer</a></td><td><a href=''>Supprimer</a></td>";
    $TABLEAU .= "</tr>";
}

include_once "view/admin.php";