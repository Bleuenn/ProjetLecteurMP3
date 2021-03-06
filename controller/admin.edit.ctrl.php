<?php
include_once("model/Morceau.php");
use Model\DAO;
use Model\Morceau;

!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;
!empty($_GET['increment']) ? $increment = $_GET['increment'] : $increment = null;

!empty($_POST['titre']) ? $titre = $_POST['titre'] : $titre = null;
!empty($_POST['artiste']) ? $artiste = $_POST['artiste'] : $artiste = null;
!empty($_POST['album']) ? $album = $_POST['album'] : $album = null;
!empty($_POST['annee']) ? $annee= intval($_POST['annee']) : $annee = null;
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

    if(!is_null($id) &&  !is_null($titre) && !is_null($artiste) && !is_null($album) && !is_null($annee) && !is_null($genre) && !is_null($mp3) && !is_null($cover)){
        try{
            $morceau = new Morceau($titre, $artiste, $album, $annee, $genre, $mp3, $cover, $id);

            if(is_array($cover)){
                $morceau->upload("cover");
            }

            if(is_array($mp3)){
                $morceau->upload("mp3");
            }

            $morceau->generateWaveForm();

            $dao = new DAO();
            $dao->update($morceau);
            $dao->close();
            header("Location: index.php?page=admin");
        }
        catch (Exception $e) {
            echo $e->getMessage();
        }
    }
    elseif($increment){
        $dao = new DAO();
        $result = $dao->increment($increment ,$id);
        $dao->close();
        header("Location: index.php?page=admin");
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

        if(empty($morceau->genre)){
            $GENRE = null;
        }
        else{
            $GENRE = $morceau->genre;
        }

        $MP3 = $morceau->cheminMP3;
        $COVER = $morceau->cover;

        include_once "view/admin.edit.php";
    }
}
else{
    header("Location: index.php");
}