<?php
namespace Model\Tests;

use Model\DAO;
use Model\Morceau;
use PHPUnit\Framework\TestCase;

/**
 * @coversDefaultClass \Model\DAO
 */
final class DaoTest extends TestCase
{
    private $titre = "test", $artiste="ArtisteTest", $album="AlbumTest", $annee=2000, $genre="GenreTest",
        $mp3="tests/php/test.mp3", $cover= "tests/php/test.jpg";

    /**
     * Test du contructeur de la classe DAO :
     * initialisation de la requête CURL
     * @test
     * @before
     * @covers ::__construct
     * @covers ::close
     */
    public function testConstructeur(){
        $cnx= new DAO();
        $this->assertNotFalse($cnx);
        $cnx->close();
    }

    /**
     * Test de la méthode getAll :
     * @test
     * @covers ::getAll
     * @covers ::getInfo
     * @depends testConstructeur
     */
    public function testGetAll(){
        $cnx = new DAO();
        $cnx->getAll();
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/", $infos['url']);
    }

    /**
     * Test de la méthode getById :
     * @test
     * @covers ::getById
     * @covers ::getInfo
     * @depends testConstructeur
     */
    public function testGetById(){
        $cnx = new DAO();
        $cnx->getById("5c37b38d214fb37593d7c3af");
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/5c37b38d214fb37593d7c3af", $infos['url']);
    }

    /**
    * Test de la méthode Add :
     * @test
     * @covers ::add
     * @covers ::getInfo
     * @depends testConstructeur
     */
    public function testAdd(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover, "e25rz845ef4q5");
        $cnx = new DAO();
        $cnx->add($morceau);
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/", $infos['url']);
    }

    /**
     * Test de la méthode Update :
     * @test
     * @covers ::update
     * @covers ::getInfo
     * @depends testConstructeur
     */
    public function testUpdate(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover, "e25rz845ef4q5");
        $cnx = new DAO();
        $cnx->update($morceau);
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/e25rz845ef4q5", $infos['url']);
    }

    /**
     * Test de la méthode increment :
     * @test
     * @covers ::increment
     * @covers ::getInfo
     * @depends testConstructeur
     */
    public function testIncrement(){
        $id = "e25rz845ef4q5";
        $cnx = new DAO();
        $cnx->increment("nbLike", $id);
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/e25rz845ef4q5", $infos['url']);
    }

    /**
     * Test de la méthode increment :
     * @test
     * @covers ::increment
     * @covers ::getInfo
     * @expectedException InvalidArgumentException
     * @depends testConstructeur
     */
    public function testIncrementException(){
        $id = "e25rz845ef4q5";
        $cnx = new DAO();
        $cnx->increment("t", $id);
    }

        /**
         * Test de la classe delete :
         * @test
         * @covers ::delete
         * @covers ::getInfo
         * @depends testConstructeur
         * @depends testUpdate
         */
    public function testDelete(){
        $cnx = new DAO();
        $cnx->delete("e25rz845ef4q5");
        $infos = $cnx->getInfo();
        $this->assertSame("HTTP://127.0.0.1:8080/morceau/morceau/e25rz845ef4q5", $infos['url']);
    }
}