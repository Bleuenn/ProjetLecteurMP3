<?php
namespace Model;

class Morceau
{
    private $id, $titre, $artiste, $album, $duree, $annee, $listePoint, $genre, $mp3, $cover;

    /*
     * Constructeur de classe Morceau
     */
    public function __construct($titre, $artiste, $album, $annee, $genre, $mp3, $cover, $id = null){
        $this->setId($id);
        $this->setTitre($titre);
        $this->setArtiste($artiste);
        $this->setAlbum($album);
        $this->setGenre($genre);
        $this->setMp3($mp3);
        $this->setCover($cover);
        $this->setAnnee($annee);

        //-----------------------------------------*
        //Contenu temporaire : test d'insertion bdd
        //-----------------------------------------*
        $this->duree = 275;
        //-----------------------------------------*
    }

    /* -------------------------------------------------- *
     *                  Méthodes GET                      *
     * -------------------------------------------------- */

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

    /* -------------------------------------------------- *
     *                  Méthodes SET                      *
     * -------------------------------------------------- */
    public function setId($id = null){
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

    public function setAnnee($annee)
    {
        $this->annee = $annee;
    }

    public function setGenre(string $genre){
        $this->genre = $genre;
    }

    public function setCover($cover){
        $this->cover = $cover;
    }

    public function setMp3($mp3){
        $this->mp3 = $mp3;
    }

    /*
     * Méthode Upload de fichier
     * Cette méthode sert à uploader sur
     * le serveur les fichiers img et mp3
     */
    public function upload($type)
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

    /*
     * Méthode de génération de la Weaveform selon
     * le fichier MP3 upload.
     */
    public function generateWeaveForm(){

        system("python python/audio.py ".$this->mp3);
        $infosMp3 = file_get_contents("musique.json");
        $infosMp3 = json_decode($infosMp3);
        $this->listePoint = $infosMp3->values;
        $this->duree = $infosMp3->duration;
    }
}