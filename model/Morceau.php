<?php
class Morceau
{
    private $id, $titre, $artiste, $album, $duree, $annee, $listePoint, $genre, $mp3, $cover;

    public function __construct($titre, $artiste, $album, $genre, $mp3, $cover, $id = null){
        $this->id = $id;
        $this->titre = $titre;
        $this->artiste = $artiste;
        $this->album = $album;
        $this->genre = $genre;
        $this->mp3 = $mp3;

        if(is_array($mp3)){
            self::upload("mp3");
        }

        $this->cover = $cover;

        if(is_array($cover)){
            self::upload("cover");
        }

        $this->generateWeaveForm();

        //-----------------------------------------*
        //Contenu temporaire : test d'insertion bdd
        //-----------------------------------------*
        $this->annee = 2000;
        $this->duree = 275;
        //-----------------------------------------*
    }

    public function getId()
    {
        return $this->id;
    }

    public function getTitre()
    {
        return $this->titre;
    }

    public function getArtiste()
    {
        return $this->artiste;
    }

    public function getAlbum()
    {
        return $this->album;
    }

    public function getDuree()
    {
        return $this->duree;
    }

    public function getAnnee()
    {
        return $this->annee;
    }

    public function getGenre()
    {
        return $this->genre;
    }

    public function getMp3()
    {
        return $this->mp3;
    }

    public function getListePoint()
    {
        return $this->listePoint;
    }

    public function getCover()
    {
        return $this->cover;
    }

    public function setId($id){
        $this->id = $id;
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

    private function upload($type)
    {
        //Gestion du type de fichier
        if ($type == "mp3"){
            $dossier = 'musique/mp3/';
            $file = $this->mp3;
        }
        else {
            $dossier = 'view/img/';
            $file = $this->cover;
        }

        //Création du nom du fichier à partir du titre
        $pos = strrpos($file['name'], ".");
        $extension = substr($file['name'], $pos);
        $fichier = $this->titre . $extension;

        if($type == "mp3") $this->mp3 = $dossier.$fichier;
        else $this->cover = $dossier.$fichier;

        return move_uploaded_file($file['tmp_name'], $dossier . $fichier);
    }

    private function generateWeaveForm(){

        //---------------------------------------------------------*
        //Contenu temporaire pour test d'enregistrement dans la bdd
        //---------------------------------------------------------*

        for($i = 0; $i < 400; $i++){
            $tab .= ",".rand ( 2 , 100 );
        }
        $tab = substr($tab, 1);
        $this->listePoint = $tab;

        //---------------------------------------------------------*
    }
}