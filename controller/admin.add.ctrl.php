<?php
include_once("model/Morceau.php");

!empty($_GET['id']) ? $id = $_GET['id'] : $id = null;

!empty($_POST['titre']) ? $titre = $_POST['titre'] : $titre = null;
!empty($_POST['artiste']) ? $artiste = $_POST['artiste'] : $artiste = null;
!empty($_POST['album']) ? $album = $_POST['album'] : $album = null;
!empty($_POST['genre']) ? $genre = $_POST['genre'] : $genre = null;

!empty($_FILES['mp3']['name']) ? $mp3 = $_FILES['mp3'] : $mp3 = null ;

!empty($_FILES['cover']['name']) ? $cover = $_FILES['cover'] : $cover = null;

if(!is_null($id) AND  !is_null($titre) AND !is_null($artiste) AND !is_null($album) AND !is_null($genre) AND !is_null($mp3) AND !is_null($cover)){


}
else{
    include_once "view/admin.add.php";
}

