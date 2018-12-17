<?php

class Morceau
{
    private $titre, $artiste, $album,  $genre, $mp3, $cover;

    public function __construct($titre, $artiste, $album, $genre, $mp3, $cover){
        if(is_array($mp3) AND is_array($cover)){
            if(!self::upload($mp3, "mp3"))
                throw new Exception("Echec lors de l'upload de fichier mp3");
            if(!self::upload($cover, "png"))
                throw new Exception("Echec lors de l'upload de fichier png");
        }
        else{
            $this->mp3 = $mp3;
            $this->cover = $cover;
        }

        $this->titre = $titre;
        $this->artiste = $artiste;
        $this->album = $album;
        $this->genre = $genre;
    }

    public function setTitre(string $titre){
        $this->titre = $titre;
    }

    public function setArtiste(string $artiste){
        $this->artiste = $artiste;
    }

    public function setAlbum(string $album){
        $this->album = $album;
    }

    public function setGenre(string $genre){
        $this->genre = $genre;
    }

    public function setMp3($mp3){
        $this->mp3 = $mp3;
    }

    private static function upload($file, $type){

        if($type == "mp3")
            $dossier = 'mp3/';
        else
            $dossier = 'view/img/';

        $fichier = basename($file['name']);

        if( move_uploaded_file($file['tmp_name'], $dossier.$fichier))
            return true;
        else
            return false;
    }
}