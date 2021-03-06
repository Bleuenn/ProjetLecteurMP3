"use strict";

var expect = chai.expect;

var morceau1 = new Morceau(1, "Avec le coeur et la raison", "Réel","Kery James", "view/img/reel.jpg", 0, 0, 146, 0, 0, [1, 2, 3], "musique/mp3/reel.mp3");
var morceau2 = new Morceau(2,"CQFD","...IAM","IAM","view/img/iam.jpg", 0, 0, 231, 0, 0, [1, 2, 3], "musique/mp3/cqfd.mp3");
var morceau3 = new Morceau(3,"2 issues","Si c'était à refaire...","Kery James","view/img/scar.jpg",0,0,321,0,0,[1,2,3],"musique/mp3/2issues.mp3");

var listeRap1 = [morceau1, morceau2];
var listeRap2 = [morceau1, morceau2, morceau3];

var fileEcoute1 = new FileEcoute("Rap",listeRap1);

var lecteur = new Lecteur();

var delete_cookie = function( name )  {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

describe('Tests Morceau', function () {

    //id
        
    it("should get id", function() {
        expect(morceau1.getId()).to.equal(1);
    });

    it("should set id", function() {
        morceau1.setId(42);
        expect(morceau1.getId()).to.equal(42);
    });

    //name

    it("should get name", function() {
        expect(morceau1.getName()).to.equal("Avec le coeur et la raison");
    });

    //Like

    it("should get nb like", function() {
        expect(morceau1.getNbLike()).to.equal(0);
    });

    it("should set nb like", function() {
        morceau1.setNbLike(42);
        expect(morceau1.getNbLike()).to.equal(42);
    });

    it("should add one like", function() {
        delete_cookie('like');
        morceau1.addOneLike();
        expect(morceau1.getNbLike()).to.equal(43);
    });

    //Partage

    it("should get nb Partage", function() {
        expect(morceau1.getNbPartage()).to.equal(0);
    });

    it("should set nb Partage", function() {
        morceau1.setNbPartage(42);
        expect(morceau1.getNbPartage()).to.equal(42);
    });

    it("should add one Partage", function() {
        delete_cookie('share');
        morceau1.addOnePartage();
        expect(morceau1.getNbPartage()).to.equal(43);
    });

    //Play

    it("should get nb Play", function() {
        expect(morceau1.getNbPlay()).to.equal(0);
    });

    it("should set nb Play", function() {
        morceau1.setNbPlay(42);
        expect(morceau1.getNbPlay()).to.equal(42);
    });

    it("should add one Play", function() {
        delete_cookie('play');
        morceau1.addOnePlay();
        expect(morceau1.getNbPlay()).to.equal(43);
    });

    //Comment

    it("should get nb Comment", function() {
        expect(morceau1.getNbComment()).to.equal(0);
    });

    it("should set nb Comment", function() {
        morceau1.setNbComment(42);
        expect(morceau1.getNbComment()).to.equal(42);
    });

    /*it("should add one Comment", function() {
        morceau1.addOneComment();
        expect(morceau1.getNbComment()).to.equal(43);
    });*/

    // Values

    it("should get valueWaveform", function() {
        expect(morceau1.getValuesWaveform().join()).to.equal([1,2,3].join());
    });

    it("should set valueWaveform", function() {
        morceau1.setValuesWaveform([4,7,9])
        expect(morceau1.getValuesWaveform().join()).to.equal([4,7,9].join());
    });

    // Path

    it("should get path", function() {
        expect(morceau1.getPath()).to.equal("musique/mp3/reel.mp3");
    });

    it("should set path", function() {
        morceau1.setPath("non en fait c'est pas ça")
        expect(morceau1.getPath()).to.equal("non en fait c'est pas ça");
    });

    //Other

    it("should format milliseconde", function() {
        
        expect(morceau1.formatMillisecondes(146000)).to.equal("2:26");
    });
});

describe('Tests FileEcoute', function() {

    //id

    it("should get the id object", function() {
        expect(fileEcoute1.getId()).to.equal(0);
    });

    //name

    it("should get the name of the playlist", function() {
        expect(fileEcoute1.getNamePlaylist()).to.equal("Rap");
    });

    it("should set the name of the playlist", function() {
        fileEcoute1.setNamePlaylist("Rap2Ouf");
        expect(fileEcoute1.getNamePlaylist()).to.equal("Rap2Ouf");
    });

    //liste

    it("should get listeMorceau", function() {
        expect(fileEcoute1.getListeMorceau()).to.equal(listeRap1);
    });

    it("should add morceau", function() {
        fileEcoute1.addMorceau(morceau3);
        expect(fileEcoute1.getListeMorceau().join()).to.equal([morceau1, morceau2, morceau3].join());
    });

    it("should delete morceau", function() {
		fileEcoute1.deleteMorceau(3);
        expect(fileEcoute1.getListeMorceau().join()).to.equal([morceau1,morceau2].join());
    });

    it("should next morceau", function() {
        fileEcoute1.setMorceauListen(morceau1);
        expect(fileEcoute1.nextMorceau()).to.equal(morceau2);
    });

    it("should previous morceau", function() {
        fileEcoute1.setListeMorceau(listeRap2);
        fileEcoute1.setMorceauListen(morceau3);
        expect(fileEcoute1.previousMorceau()).to.equal(morceau2);
    });
});


describe('Tests Lecteur', function () {

    it("should get current Morceau", function() {
        lecteur.setCurrentMorceau(morceau1);
        expect(lecteur.getCurrentMorceau()).to.equal(morceau1);
    });

    it("should set current Morceau", function() {
        lecteur.setCurrentMorceau(morceau2)
        expect(lecteur.getCurrentMorceau()).to.equal(morceau2);
    });

    it("should get current Time", function() {
        lecteur.setCurrentTime(241);
        expect(lecteur.getCurrentTime()).to.equal(241);
    });

    it("should set current Time", function() {
        lecteur.setCurrentTime(352)
        expect(lecteur.getCurrentTime()).to.equal(352);
    });

    it("should get Volume", function() {
        lecteur.setVolume(50);
        expect(lecteur.getVolume()).to.equal(50);
    });

    it("should set Volume", function() {
        lecteur.setVolume(100);
        expect(lecteur.getVolume()).to.equal(100);
    });

    it("should get Max", function() {
        expect(lecteur.getMax()).to.equal(3);
    });
});

