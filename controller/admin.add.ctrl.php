<?php
include_once("model/Morceau.php");
use Model\DAO;
use Model\Morceau;

!empty($_POST['titre']) ? $titre = $_POST['titre'] : $titre = null;
!empty($_POST['artiste']) ? $artiste = $_POST['artiste'] : $artiste = null;
!empty($_POST['annee']) ? $annee = $_POST['annee'] : $annee = null;
!empty($_POST['album']) ? $album = $_POST['album'] : $album = null;
!empty($_POST['genre']) ? $genre = $_POST['genre'] : $genre = null;

!empty($_FILES['mp3']['name']) ? $mp3 = $_FILES['mp3'] : $mp3 = null ;

!empty($_FILES['cover']['name']) ? $cover = $_FILES['cover'] : $cover = null;

if(!is_null($titre) AND !is_null($artiste) AND !is_null($album) AND !is_null($annee) AND !is_null($genre) AND !is_null($mp3) AND !is_null($cover)){

    try {

        $morceau = new Morceau($titre, $artiste, $album, $annee, $genre, $mp3, $cover);
        $morceau->upload("cover");
        $morceau->upload("mp3");
        $morceau->generateWeaveForm();

        $dao = new DAO();
        $dao->add($morceau);
        $dao->close();

        header("Location: index.php?page=admin");
    }
    catch (Exception $e) {
        echo $e->getMessage();
    }

}
else{
    include_once "view/admin.add.php";
}

