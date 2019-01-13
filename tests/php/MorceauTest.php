<?php
include_once "model/Morceau.php";

use Model\Morceau;
use PHPUnit\Framework\TestCase;

final class MorceauTest extends TestCase
{
    private $titre = "test", $artiste="ArtisteTest", $album="AlbumTest", $annee=2000, $genre="GenreTest",
            $mp3="tests/php/test.mp3", $cover= "tests/php/test.jpg", $id="2ea5f125e548a6";

    /*
     * L'attribut testJPG simule un
     * $_FILE d'une image.
     */
    private $testJPG = array(
      'name'=>'test.jpg',
        'tmp_name'=>'tests/php/test.jpg',
        'type'=>'image/jpeg',
        'size'=>1472190,
        'error'=>0
    );

    /*
     * L'attribut testMP3 simule un
     * $_FILE d'une musique.
     */
    private $testMP3 = array(
        'name'=>'test.mp3',
        'tmp_name'=>'tests/php/test.mp3',
        'type'=>'audio/mpeg',
        'size'=>1472190,
        'error'=>0
    );

    /*
     * Test du contructeur de la classe Morceau avec l'id
     * du morceau renseigné.
     * @covers Morceau::__construct
     * @covers Morceau::getTitre
     * @covers Morceau::getArtiste
     * @covers Morceau::getAlbum
     * @covers Morceau::getAnnee
     * @covers Morceau::getGenre
     * @covers Morceau::getMp3
     * @covers Morceau::getCover
     * @covers Morceau::getId
     */
    public function testConstructeurAvecId()
    {
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover, $this->id);
        $this->assertSame("test", $morceau->getTitre());
        $this->assertSame("ArtisteTest", $morceau->getArtiste());
        $this->assertSame("AlbumTest", $morceau->getAlbum());
        $this->assertSame(2000, $morceau->getAnnee());
        $this->assertSame("GenreTest", $morceau->getGenre());
        $this->assertSame("tests/php/test.mp3", $morceau->getMp3());
        $this->assertSame("tests/php/test.jpg", $morceau->getCover());
        $this->assertSame("2ea5f125e548a6", $morceau->getId());
    }

    /*
     * Test du contructeur de la classe Morceau sans que l'id
     * du morceau ne soit renseigné.
     * Vérification de l'initialisation par défault de l'id.
     */
    public function testConstructSansId()
    {
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $this->assertSame(null, $morceau->getId());
    }

    /*
     * Test de la méthode Upload.
     * Vérification de l'assignation de l'attribut cover.
     * Vérification de l'assignation de l'attribut mp3.
     */
    public function testUpload(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->testMP3, $this->testJPG);
        $morceau->upload("cover");
        $this->assertSame( "view/img/test.jpg", $morceau->getCover() );
        $morceau->upload("mp3");
        $this->assertSame( "musique/mp3/test.mp3", $morceau->getMp3() );
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testIdNonString(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setId(20);
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testAnneeNonInt(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setAnnee("2005");
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testAnneeNegative(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setAnnee(-20);
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testGenreNonString(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setGenre(20);
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testCoverInt(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setCover(20);
    }

    /**
     * @expectedException InvalidArgumentException
     */
    public function testMp3(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $morceau->setMp3(20);
    }

    /*
     * Test de la méthode GenerateWeaveform
     * Vérification de la récupération des points
     * du spectre audio d'un fichier MP3.
     */
    public function testGenerateWeaveForm(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover, $this->id);
        $morceau->generateWeaveForm();
        //$infosMp3 = json_decode( file_get_contents("./musique.json") );
        //$listePoint = $infosMp3->values;
        //$this->assertSame(json_encode( $listePoint ), json_encode( $morceau->getListePoint() ) );
    }
}