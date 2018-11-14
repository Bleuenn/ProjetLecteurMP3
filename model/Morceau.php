<?php
/**
 * Created by PhpStorm.
 * User: captainad-hoc
 * Date: 14/11/18
 * Time: 21:32
 */

class Morceau
{
    private $id;
    private $titre;
    private $annee;
    private $duree;
    private $nbEcoute;
    private $nbLike;
    private $nbPartage;
    private $cheminMP3;
    private $cover;
    private $album;
    private $artiste;
    private $playlist;

    public function __construct($id, $titre, $annee, $duree, $nbEcoute, $nbLike, $nbPartage, $cheminMP3, $cover,
                                $album, $artiste, $playlist)
    {
        $this->id = $id;
        $this->titre = $titre;
        $this->annee = $annee;
        $this->duree = $duree;
        $this->nbEcoute = $nbEcoute;
        $this->nbLike = $nbLike;
        $this->nbPartage = $nbPartage;
        $this->cheminMP3 = $cheminMP3;
        $this->cover = $cover;
        $this->album = $album;
        $this->artiste = $artiste;
        $this->playlist = $playlist;
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * @return mixed
     */
    public function getAnnee()
    {
        return $this->annee;
    }

    /**
     * @return mixed
     */
    public function getDuree()
    {
        return $this->duree;
    }

    /**
     * @return mixed
     */
    public function getNbEcoute()
    {
        return $this->nbEcoute;
    }

    /**
     * @return mixed
     */
    public function getNbLike()
    {
        return $this->nbLike;
    }

    /**
     * @return mixed
     */
    public function getNbPartage()
    {
        return $this->nbPartage;
    }

    /**
     * @return mixed
     */
    public function getCheminMP3()
    {
        return $this->cheminMP3;
    }

    /**
     * @return mixed
     */
    public function getCover()
    {
        return $this->cover;
    }

    /**
     * @return mixed
     */
    public function getAlbum()
    {
        return $this->album;
    }

    /**
     * @return mixed
     */
    public function getArtiste()
    {
        return $this->artiste;
    }

    /**
     * @return mixed
     */
    public function getPlaylist()
    {
        return $this->playlist;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @param mixed $titre
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;
    }

    /**
     * @param mixed $annee
     */
    public function setAnnee($annee)
    {
        $this->annee = $annee;
    }

    /**
     * @param mixed $duree
     */
    public function setDuree($duree)
    {
        $this->duree = $duree;
    }

    /**
     * @param mixed $nbEcoute
     */
    public function setNbEcoute($nbEcoute)
    {
        $this->nbEcoute = $nbEcoute;
    }

    /**
     * @param mixed $nbLike
     */
    public function setNbLike($nbLike)
    {
        $this->nbLike = $nbLike;
    }

    /**
     * @param mixed $nbPartage
     */
    public function setNbPartage($nbPartage)
    {
        $this->nbPartage = $nbPartage;
    }

    /**
     * @param mixed $cheminMP3
     */
    public function setCheminMP3($cheminMP3)
    {
        $this->cheminMP3 = $cheminMP3;
    }

    /**
     * @param mixed $cover
     */
    public function setCover($cover)
    {
        $this->cover = $cover;
    }

    /**
     * @param mixed $album
     */
    public function setAlbum($album)
    {
        $this->album = $album;
    }

    /**
     * @param mixed $artiste
     */
    public function setArtiste($artiste)
    {
        $this->artiste = $artiste;
    }

    /**
     * @param mixed $playlist
     */
    public function setPlaylist($playlist)
    {
        $this->playlist = $playlist;
    }
}