<?php
namespace Model;

class Morceau
{
    private $id, $titre, $artiste, $album, $duree, $annee, $listePoint, $genre, $mp3, $cover;

    /**
     * Morceau constructor.
     * @param $titre
     * @param $artiste
     * @param $album
     * @param $annee
     * @param $genre
     * @param $mp3
     * @param $cover
     * @param null $id
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
    }

    /* -------------------------------------------------- *
     *                  Méthodes GET                      *
     * -------------------------------------------------- */

    /**
     * GET de l'id.
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * GET du titre.
     * @return mixed
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Get de l'artiste.
     * @return mixed
     */
    public function getArtiste()
    {
        return $this->artiste;
    }

    /**
     * GET de l'album.
     * @return mixed
     */
    public function getAlbum()
    {
        return $this->album;
    }

    /**
     * GET de la durée.
     * @return mixed
     */
    public function getDuree()
    {
        return $this->duree;
    }

    /**
     * GET de l'année.
     * @return mixed
     */
    public function getAnnee()
    {
        return $this->annee;
    }

    /**
     * GET du genre.
     * @return mixed
     */
    public function getGenre()
    {
        return $this->genre;
    }

    /**
     * GET du MP3.
     * @return mixed
     */
    public function getMp3()
    {
        return $this->mp3;
    }

    /**
     * GET de la liste de Point.
     * @return mixed
     */
    public function getListePoint()
    {
        return $this->listePoint;
    }

    /**
     * GET de la pochette d'album.
     * @return mixed
     */
    public function getCover()
    {
        return $this->cover;
    }

    /* -------------------------------------------------- *
     *                  Méthodes SET                      *
     * -------------------------------------------------- */

    /**
     * SET de l'id.
     * La méthode filtre le type
     * de l'id.
     * @param null $id
     */
    public function setId($id = null){
        if(!is_string($id) && !is_null($id)) {
            throw new \InvalidArgumentException("ID : string excepted");
        }
        $this->id = $id;
    }

    /**
     * @param $titre
     */
    public function setTitre($titre){
        $this->titre = $titre;
    }

    /**
     * @param $artiste
     */
    public function setArtiste($artiste){
        $this->artiste = $artiste;
    }

    /**
     * @param $album
     */
    public function setAlbum($album){
        $this->album = $album;
    }

    /**
     * SET de l'année.
     * La méthode verifie que l'année
     * est un integer non null.
     * @param $annee
     */
    public function setAnnee($annee){
        if(!is_int($annee) && !is_null($annee)){
            throw new \InvalidArgumentException("Annee : integer excepted");
        }
        else if($annee < 0){
            throw new \InvalidArgumentException("Annee : integer > 0 excepted");
        }
        $this->annee = $annee;
    }

    /**
     * SET du genre.
     * La méthode vérifie que le genre
     * soit de type string.
     * @param $genre
     */
    public function setGenre($genre){
        if(!is_string($genre) && !is_null($genre)){
            throw new \InvalidArgumentException("Genre : String excepted");
        }
        $this->genre = $genre;
    }

    /**
     * SET de la pochette d'album.
     * La méthode verifie le type du
     * paramètre.
     * @param $cover
     */
    public function setCover($cover){
        if(!is_array($cover) && !is_string($cover)) {
            throw new \InvalidArgumentException("Cover : String or array excepted");
        }
        $this->cover = $cover;
    }

    /**
     * SET du MP3.
     * La méthode verifie le type du
     * paramètre.
     * @param $mp3
     */
    public function setMp3($mp3){
        if(!is_array($mp3) && !is_string($mp3)){
            throw new \InvalidArgumentException("Mp3 : String or array excepted");
        }
        $this->mp3 = $mp3;
    }

    /**
     * Méthode Upload de fichier
     * Cette méthode sert à uploader sur
     * le serveur les fichiers img et mp3
     * @param $type ( le type du fichier musique ou pochette )
     * @return true ou false.
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

        if($type == "mp3"){ $this->mp3 = $dossier.$fichier; }
        else{ $this->cover = $dossier.$fichier; }

        return move_uploaded_file($file['tmp_name'], $dossier . $fichier);
    }


    /**
     * Méthode de génération de la Weaveform selon
     * le fichier MP3 upload.
     */
    public function generateWaveForm(){
        exec("python python/audio.py ".$this->mp3);
        $infosMp3 = file_get_contents("musique.json");
        $infosMp3 = json_decode($infosMp3);
        $this->listePoint = $infosMp3->values;
        $this->duree = $infosMp3->duration;
    }
}