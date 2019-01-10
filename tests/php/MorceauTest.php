<?php
include_once "model/Morceau.php";
use Model\Morceau;
use PHPUnit\Framework\TestCase;

final class MorceauTest extends TestCase
{
    private $titre = "test", $artiste="ArtisteTest", $album="AlbumTest", $annee=2000, $genre="GenreTest",
            $mp3="musique/mp3/test.mp3", $cover= "view/img/test.png", $id=0;

    private $testJPG = array(
        'name'=>'test.jpg',
        'tmp_name'=>'tests/php/test.jpg',
        'type'=>'image/jpeg',
        'size'=>1472190,
        'error'=>0
    );

    private $testMP3 = array(
        'name'=>'test.mp3',
        'tmp_name'=>'./tests/php/test.mp3',
        'type'=>'audio/mpeg',
        'size'=>1472190,
        'error'=>0
    );

    /*
     * Test du contructeur de la classe Morceau
     */
    public function testConstructeurAvecId()
    {
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover, $this->id);
        $this->assertSame("test", $morceau->getTitre());
        $this->assertSame("ArtisteTest", $morceau->getArtiste());
        $this->assertSame("AlbumTest", $morceau->getAlbum());
        $this->assertSame(2000, $morceau->getAnnee());
        $this->assertSame("GenreTest", $morceau->getGenre());
        $this->assertSame("musique/mp3/test.mp3", $morceau->getMp3());
        $this->assertSame("view/img/test.png", $morceau->getCover());
        $this->assertSame(0, $morceau->getId());
    }

    public function testConstructSansId()
    {
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->mp3, $this->cover);
        $this->assertSame(null, $morceau->getId());
    }

    public function testUpload(){
        $morceau = new Morceau($this->titre, $this->artiste, $this->album, $this->annee, $this->genre, $this->testMP3, $this->testJPG);
        $this->assertTrue( $morceau->upload("cover") );
        $this->assertSame("view/img/test.jpg", $morceau->getCover());
    }
}