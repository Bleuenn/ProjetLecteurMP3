<?php
include_once("model/Morceau.php");
use Model\DAO;
use Model\Morceau;

!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;

!empty($_POST['titre']) ? $titre = $_POST['titre'] : $titre = null;
!empty($_POST['artiste']) ? $artiste = $_POST['artiste'] : $artiste = null;
!empty($_POST['album']) ? $album = $_POST['album'] : $album = null;
!empty($_POST['annee']) ? $annee = $_POST['annee'] : $annee = null;
!empty($_POST['genre']) ? $genre = $_POST['genre'] : $genre = null;

!empty($_FILES['mp3']['name']) ? $mp3 = $_FILES['mp3'] : $mp3 = null ;

!empty($_FILES['cover']['name']) ? $cover = $_FILES['cover'] : $cover = null;

if($cover === null) {
    !empty($_POST['old_cover']) ? $cover = $_POST['old_cover'] : $cover = null;
}

if($mp3 === null){
    !empty($_POST['old_mp3']) ? $mp3 = $_POST['old_mp3'] : $mp3 = null;
}

if($id !== null) {

    if(!is_null($id) AND  !is_null($titre) AND !is_null($artiste) AND !is_null($album) AND !is_null($annee) AND !is_null($genre) AND !is_null($mp3) AND !is_null($cover)){
        try{
            $morceau = new Morceau($titre, $artiste, $album, $genre, $mp3, $cover, $id);
            $dao = new DAO();
            $dao->update($morceau);
            $dao->close();
            header("Location: index.php?page=admin");
        }
        catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    else{

        $dao = new DAO();
        $json = $dao->getById($id);
        $dao->close();

        $morceau = json_decode($json);

        $TITRE = $morceau->titre;
        $ARTISTE = $morceau->artiste;
        $ALBUM = $morceau->album;
        $ANNEE = $morceau->annee;
        $GENRE = $morceau->genre;
        $MP3 = $morceau->cheminMP3;
        $COVER = $morceau->cover;

        include_once "view/admin.edit.php";
    }
}
else{
    header("Location: index.php");
}