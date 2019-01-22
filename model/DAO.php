<?php
namespace Model;

class DAO {

    private $connection;
    const URL = "127.0.0.1:8080/morceau/morceau/";

    /**
     * DAO constructor.
     * Initialise la connexion.
     */
    public function __construct(){
        $this->connection = curl_init();
    }

    /**
     * Requête CURL pour récuperer toutes
     * les musiques de la bdd.
     * @return mixed (false, json)
     */
    public function getAll(){
        curl_setopt($this->connection, CURLOPT_URL, self::URL);

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

    /**
     * Requête CURL pour récuperer un
     * morceau selon un ID.
     * @param string $id
     * @return mixed
     */
    public function getById(string $id){
        curl_setopt($this->connection, CURLOPT_URL, self::URL.$id);

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

    /**
     * Requête CURL pour modifier un
     * morceau dans la bdd.
     * @param Morceau $morceau
     * @return mixed
     */
    public function update(Morceau $morceau){

        // Construction du corps de la requête avec les informations de l'objet Morceau
        $body = array("titre" => $morceau->getTitre(), "artiste" => $morceau->getArtiste(), "album" => $morceau->getAlbum(), "listePoint" => $morceau->getListePoint(), "duree" => $morceau->getDuree(), "annee" => $morceau->getAnnee(), "cheminMP3" => $morceau->getMp3(), "cover" => $morceau->getCover(), "genre" => $morceau->getGenre() );

        //Construction de la requête
        curl_setopt($this->connection, CURLOPT_URL,            self::URL.$morceau->getId());
        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($this->connection, CURLOPT_CUSTOMREQUEST, 'PATCH');
        curl_setopt($this->connection, CURLOPT_POSTFIELDS,     json_encode($body) );
        curl_setopt($this->connection, CURLOPT_HTTPHEADER,     array('Content-Type:application/json'));

        return curl_exec($this->connection);
    }

    /**
     * Requête CURL pour ajouter un morceau dans la BDD
     * @param Morceau $morceau
     * @return mixed
     */
    public function add(Morceau $morceau){

        // Construction du corps de la requête avec les informations de l'objet Morceau
        $body = array("titre" => $morceau->getTitre(), "artiste" => $morceau->getArtiste(), "album" => $morceau->getAlbum(), "listePoint" => $morceau->getListePoint(), "nbEcoute" => 0, "nbLike" => 0, "nbPartage"=>0, "nbComment" => 0,"duree" => $morceau->getDuree(), "annee" => $morceau->getAnnee(), "cheminMP3" => $morceau->getMp3(), "cover" => $morceau->getCover(), "genre" => $morceau->getGenre() );

        curl_setopt($this->connection, CURLOPT_URL,            self::URL);
        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($this->connection, CURLOPT_POST,           1);
        curl_setopt($this->connection, CURLOPT_POSTFIELDS,     json_encode($body) );
        curl_setopt($this->connection, CURLOPT_HTTPHEADER,     array('Content-Type:application/json'));

        return curl_exec($this->connection);
    }

    /**
     * Requête CURL pour incrementer un champs
     * passé un param selon un id passé en
     * param.
     * @param string $champ
     * @param string $id
     * @return mixed
     */
    public function increment(string $champ, string $id){
        $champsValid = array("nbEcoute", "nbLike", "nbPartage", "nbComment");

        if(in_array($champ, $champsValid)){
            //Construction de la requête
            curl_setopt($this->connection, CURLOPT_URL,            self::URL.$id);
            curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
            curl_setopt($this->connection, CURLOPT_CUSTOMREQUEST,  'PATCH');
            curl_setopt($this->connection, CURLOPT_POSTFIELDS,      json_encode(array("\$inc" => array($champ => 1))) );
            curl_setopt($this->connection, CURLOPT_HTTPHEADER,      array('Content-Type:application/json'));

            return curl_exec($this->connection);
        }
        else{
            throw new \InvalidArgumentException("Champ invalide");
        }
    }

    /**
     * Requête CURL pour suprimmer un morceau
     * de la BDD.
     * @param $id
     * @return mixed
     */
    public function delete($id){

        curl_setopt($this->connection, CURLOPT_URL,            self::URL.$id);
        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($this->connection, CURLOPT_CUSTOMREQUEST, 'DELETE');

        return curl_exec($this->connection);
    }

    /**
     * Méthode qui détail la
     * Requête CURL envoyé.
     * ( Utilisé pour les tests )
     * @return mixed
     */
    public function getInfo(){
        return curl_getinfo($this->connection);
    }

    /**
     * Méthode pour Fermer la
     * connexion à la BDD.w
     */
    public function close(){
        curl_close($this->connection);
    }
}