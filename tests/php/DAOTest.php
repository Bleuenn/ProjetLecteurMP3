<?php
include_once "model/DAO.php";

use Model\DAO;
use PHPUnit\Framework\TestCase;

final class DAOTest extends TestCase
{

    public function testGetAll()
    {
        try{
            $conn = new DAO();
            $this->assertJson($conn->getAll());
            $conn->close();
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    /**
     * Test de récuperation d'un titre avec un espace
     */
    public function testGetByTitleWithSpace()
    {
        try{
            $conn = new DAO();
            $this->assertJson($conn->getByTitle("Levan+Polka"));
            $conn->close();
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }

    /**
     * Test de récuperation d'un titre sans espace
     */
    public function testGetByTitleWithoutSpace()
    {
        try{
            $conn = new DAO();
            $this->assertJson($conn->getByTitle("lillies"));
            $conn->close();
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
}