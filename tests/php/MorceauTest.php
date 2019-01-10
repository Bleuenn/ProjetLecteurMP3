<?php
include_once "model/Morceau.php";
use Model\Morceau;
use PHPUnit\Framework\TestCase;

final class MorceauTest extends TestCase
{
    public $testPNG = array(
        'name'=>'test.jpg',
        'tmp_name'=>'./tests/php/test.jpg',
        'type'=>'image/jpeg',
        'size'=>1472190,
        'error'=>0
    );

    public $testMP3 = array(
        'name'=>'test.mp3',
        'tmp_name'=>'./tests/php/test.mp3',
        'type'=>'audio/mpeg',
        'size'=>1472190,
        'error'=>0
    );

    public function testConstructeurSansId()
    {
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", "img/roule.png");
        $this->assertSame($morceau->getTitre(), "Roule");
        $this->assertSame($morceau->getArtiste(), "Lomepal");
        $this->assertSame($morceau->getAlbum(), "Cette foutue perle");
        $this->assertSame($morceau->getGenre(), "RAP");
        $this->assertSame($morceau->getMp3(), "musique/mp3/roule.mp3");
        $this->assertSame($morceau->getCover(), "img/roule.png");
        $this->assertSame($morceau->getId(), null);
    }

    public function testConstructeurAvecId()
    {
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", "img/roule.png", 1);
        $this->assertSame($morceau->getTitre(), "Roule");
        $this->assertSame($morceau->getArtiste(), "Lomepal");
        $this->assertSame($morceau->getAlbum(), "Cette foutue perle");
        $this->assertSame($morceau->getGenre(), "RAP");
        $this->assertSame($morceau->getMp3(), "musique/mp3/roule.mp3");
        $this->assertSame($morceau->getCover(), "img/roule.png");
        $this->assertSame($morceau->getId(), 1);
    }

    public function testUploadFilePNG()
    {
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", $this->testPNG);
        $this->assertSame($morceau->getCover(), "view/img/Roule.jpg");
        $this->assertTrue(file_exists("view/img/test.jpg"));
        unlink("view/img/test.jpg");
    }

//    public function testUploadFileMP3()
//    {
//        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", $this->testMP3, "img/roule.png");
//        $this->assertSame($morceau->getMP3(), "musique/mp3/Roule.mp3");
//        $this->assertTrue(file_exists("musique/mp3/test.mp3"));
//        unlink("musique/mp3/test.mp3");
//    }
//
//    public function testUploadFilesMp3Png(){
//        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", $this->testMP3, $this->testPNG);
//        $this->assertSame($morceau->getMP3(), "musique/mp3/Roule.mp3");
//        $this->assertSame($morceau->getCover(), "view/img/Roule.jpg");
//        $this->assertTrue(file_exists("musique/mp3/test.mp3"));
//        $this->assertTrue(file_exists("view/img/test.jpg"));
//        unlink("musique/mp3/test.mp3");
//        unlink("view/img/test.jpg");
//    }
}