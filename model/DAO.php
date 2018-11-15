<?php
/**
 * Classe d'accées aux données mongodb
 * Les données sont récuperé via des requête curl à l'api restheart
 */

class DAO {

    private $connection;

    public function __construct(){
        $this->connection = curl_init();
    }

    public function getAll(){
        curl_setopt($this->connection, CURLOPT_URL, "127.0.0.1:8080/morceau/morceau");

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

    public function getByTitle($title){
        curl_setopt($this->connection, CURLOPT_URL, "127.0.0.1:8080/morceau/morceau/?filter={'titre':'$title'}");

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        return curl_exec($this->connection);
    }

    public function close(){
        curl_close($this->connection);
    }
}