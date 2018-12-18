<?php

class DAO {

    private $connection;

    public function __construct(){
        $this->connection = curl_init();
    }

    public function getAll(){
        curl_setopt($this->connection, CURLOPT_URL, "127.0.0.1:8080/morceau/morceau");

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        try {
            return curl_exec($this->connection);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }

        return false;
    }

    public function getById(string $id){
        curl_setopt($this->connection, CURLOPT_URL, '127.0.0.1:8080/morceau/morceau/'.$id);

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        try {
            return curl_exec($this->connection);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }

        return false;
    }

    public function getByTitle(string $title){
        curl_setopt($this->connection, CURLOPT_URL, '127.0.0.1:8080/morceau/morceau/?filter={"title": "'.$title.'"}');

        curl_setopt($this->connection, CURLOPT_RETURNTRANSFER, 1);

        try {
            return curl_exec($this->connection);
        }
        catch (Exception $e){
            echo $e->getMessage();
        }

        return false;
    }

    public function update($morceau){

    }

    public function close(){
        curl_close($this->connection);
    }
}