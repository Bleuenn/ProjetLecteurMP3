<?php
/**
 * Classe d'accées aux données mongodb
 */

phpinfo();

$dbhost = "localhost";
$dbname = "morceau";

try {

    $mongo = new Mongo("mongodb://$dbhost");
} catch (MongoConnectionException $e) {

    echo $e->getMessage();
}

$db = $mongo->$dbname;

var_dump($db);

$collection = $db->shows;

$cursor = $collection->find();

foreach($cursor as $document){
    var_dump($document);
}