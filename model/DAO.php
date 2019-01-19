<?php
namespace Model;

use http\Exception\InvalidArgumentException;
use PHPUnit\Runner\Exception;

class DAO {

    private $connection;
    const URL = "127.0.0.1:8080/morceau/morceau/";

    public function __construct(){
        $this->connection = curl_init();
    }

    public function getAll(){
        curl_setopt($this->connection, CURLOPT_URL, self::URL);

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

    public function getById(string $id){
        curl_setopt($this->connection, CURLOPT_URL, self::URL.$id);

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

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

    public function add(Morceau $morceau){

        // Construction du corps de la requête avec les informations de l'objet Morceau
        $body = array("titre" => $morceau->getTitre(), "artiste" => $morceau->getArtiste(), "album" => $morceau->getAlbum(), "listePoint" => [$morceau->getListePoint()], "nbEcoute" => 0, "nbLike" => 0, "nbPartage"=>0, "nbComment" => 0,"duree" => $morceau->getDuree(), "annee" => $morceau->getAnnee(), "cheminMP3" => $morceau->getMp3(), "cover" => $morceau->getCover(), "genre" => $morceau->getGenre() );

        curl_setopt($this->connection, CURLOPT_URL,            self::URL);
        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($this->connection, CURLOPT_POST,           1);
        curl_setopt($this->connection, CURLOPT_POSTFIELDS,     json_encode($body) );
        curl_setopt($this->connection, CURLOPT_HTTPHEADER,     array('Content-Type:application/json'));

        return curl_exec($this->connection);
    }

    public function increment(string $champ, string $id){
        $champsValid = array("nbEcoute", "nbLike", "nbPartage", "nbComment");

        if(in_array($champ, $champsValid)){
            //Construction de la requête
            curl_setopt($this->connection, CURLOPT_URL,            self::URL.$id);
            curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
            curl_setopt($this->connection, CURLOPT_CUSTOMREQUEST,  'PATCH');
            curl_setopt($this->connection, CURLOPT_POSTFIELDS,      json_encode('"$inc": { "'.$champ.'": 1 }') );
            curl_setopt($this->connection, CURLOPT_HTTPHEADER,      array('Content-Type:application/json'));

            return curl_exec($this->connection);
        }
        else{
            throw new InvalidArgumentException("Champ invalide");
        }
    }

    public function delete($id){

        curl_setopt($this->connection, CURLOPT_URL,            self::URL.$id);
        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt($this->connection, CURLOPT_CUSTOMREQUEST, 'DELETE');

        return curl_exec($this->connection);
    }

    public function getInfo(){
        return curl_getinfo($this->connection);
    }

    public function close(){
        curl_close($this->connection);
    }
}