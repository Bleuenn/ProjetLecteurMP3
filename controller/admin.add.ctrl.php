<?php
include_once("model/Morceau.php");
use Model\DAO;
use Model\Morceau;

!empty($_POST['titre']) ? $titre = $_POST['titre'] : $titre = null;
!empty($_POST['artiste']) ? $artiste = $_POST['artiste'] : $artiste = null;
!empty($_POST['annee']) ? $annee = intval($_POST['annee']) : $annee = null;
!empty($_POST['album']) ? $album = $_POST['album'] : $album = null;
!empty($_POST['genre']) ? $genre = $_POST['genre'] : $genre = null;

!empty($_FILES['mp3']['name']) ? $mp3 = $_FILES['mp3'] : $mp3 = null ;

!empty($_FILES['cover']['name']) ? $cover = $_FILES['cover'] : $cover = null;

if(!is_null($titre) && !is_null($artiste) && !is_null($album) && !is_null($annee) && !is_null($genre) && !is_null($mp3) && !is_null($cover)){

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

