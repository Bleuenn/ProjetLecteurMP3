<?php
/**
 * Classe d'accées aux données mongodb
 */

require '../vendor/autoload.php';

$dbhost = "localhost:27017";
$dbname = "morceau";

try {
    $manager = new MongoDB\Driver\Manager("mongodb://$dbhost");

    $stats = new MongoDB\Driver\Command(["dbstats" => 1]);
    $res = $manager->executeCommand("morceau", $stats);

    $stats = current($res->toArray());

    print_r($stats);

} catch (MongoDB\Driver\Exception\Exception $e) {
    echo $e->getMessage();

    $filename = basename(__FILE__);

    echo "The $filename script has experienced an error.\n";
    echo "It failed with the following exception:\n";

    echo "Exception:", $e->getMessage(), "\n";
    echo "In file:", $e->getFile(), "\n";
    echo "On line:", $e->getLine(), "\n";
}
finally{
    $manager->close();
}


/*
$db = $manager->$dbname;

var_dump($db);

$collection = $db->show();

$cursor = $collection->find();

foreach($cursor as $document){
    var_dump($document);
}*/