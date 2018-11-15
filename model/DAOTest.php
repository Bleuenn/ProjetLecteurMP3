<?php
/**
 * Created by PhpStorm.
 * User: captainad-hoc
 * Date: 15/11/18
 * Time: 14:45
 */
include_once "DAO.php";

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

    public function testGetByTitle()
    {
        try{
            $conn = new DAO();
            $this->assertJson($conn->getByTitle("lilies"));
            $conn->close();
        }
        catch (Exception $e){
            echo $e->getMessage();
        }
    }
}