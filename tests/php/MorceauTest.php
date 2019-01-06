<?php
include_once "model/DAO.php";

use PHPUnit\Framework\TestCase;

final class MorceauTest extends TestCase
{
    public function testConstructeurSansId()
    {
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", "img/roule.png");
        $this->assertSame($morceau->getTitre(), "Roule");
        $this->assertSame($morceau->getArtiste(), "Lomepal");
        $this->assertSame($morceau->getAlbum(), "Cette foutue perle");
        $this->assertSame($morceau->getGenre(), "RAP");
        $this->assertSame($morceau->getGenre(), "musique/mp3/roule.mp3");
        $this->assertSame($morceau->getGenre(), "img/roule.png");
        $this->assertSame($morceau->getId(), null);
    }

    public function testConstructeurAvecId()
    {
        $morceau = new Morceau("Roule", "Lomepal", "Cette foutue perle", "RAP", "musique/mp3/roule.mp3", "img/roule.png", 1);
        $this->assertSame($morceau->getTitre(), "Roule");
        $this->assertSame($morceau->getArtiste(), "Lomepal");
        $this->assertSame($morceau->getAlbum(), "Cette foutue perle");
        $this->assertSame($morceau->getGenre(), "RAP");
        $this->assertSame($morceau->getGenre(), "musique/mp3/roule.mp3");
        $this->assertSame($morceau->getGenre(), "img/roule.png");
        $this->assertSame($morceau->getId(), 1);
    }
}