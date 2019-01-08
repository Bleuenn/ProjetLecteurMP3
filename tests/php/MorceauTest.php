<?php
include_once "../../model/Morceau.php";

use PHPUnit\Framework\TestCase;

final class MorceauTest extends TestCase
{
    public $testFile = array(
        'name'=>'test.jpg',
        'tmp_name'=>'test.jpg',
        'type'=>'image/jpeg',
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
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", $this->testFile);
        $this->assertSame($morceau->getCover(), "view/img/Roule.jpg");
        $this->assertTrue(file_exists("../../view/img/test.jpg"));
        unlink("../../view/img/test.jpg");
    }
}