<?php
/**
 * Created by PhpStorm.
 * User: thomas
 * Date: 15/11/18
 * Time: 21:28
 */
use Model\DAO;

require_once 'DAO.php';

if (isset($_POST['data'])) {

    if ($_POST['data'] === "") {
        $retourFonction = (new DAO)->getAll();
    } else {
        $retourFonction = (new DAO)->getByTitle($_POST['data']);
    }
    echo $retourFonction;
}