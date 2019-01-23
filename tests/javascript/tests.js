"use strict";
let expect = chai.expect;

var morceau1 = new Morceau(1, "Avec le coeur et la raison", "Réel","Kery James", "view/img/reel.jpg", 0, 0, 146, 0, 0, [1, 2, 3], "musique/mp3/reel.mp3");
var morceau2 = new Morceau(2,"CQFD","...IAM","IAM","view/img/iam.jpg", 0, 0, 231, 0, 0, [1, 2, 3], "musique/mp3/cqfd.mp3");
var morceau3 = new Morceau();

var listeRap1 = [morceau1, morceau2];
var listeRap2 = [morceau1, morceau2, morceau3];

var fileEcoute1 = new FileEcoute("Rap",listeRap1);

var lecteur = new Lecteur();

describe('Morceau', function () {
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

it("should add one Comment", function() {
    morceau1.addOneComment();
    expect(morceau1.getNbComment()).to.equal(43);
});
});

describe('FileEcoute', function() {

    it("should get the id object", function() {
        expect(fileEcoute1.getId()).to.equal(0);
    });

    it("should get the name of the playlist", function() {
        expect(fileEcoute1.getNamePlaylist()).to.equal("Rap");
    });

    it("should set the name of the playlist", function() {
        fileEcoute1.setNamePlaylist("Rap2Ouf");
        expect(fileEcoute1.getNamePlaylist()).to.equal("Rap2Ouf");
    });

    it("should get listeMorceau", function() {
        expect(fileEcoute1.getListeMorceau()).to.equal(listeRap1);
    });

    it("should add morceau", function() {
        fileEcoute1.addMorceau(morceau3);
        expect(fileEcoute1.getListeMorceau().join()).to.equal([morceau1, morceau2, morceau3].join());
    });

    it("should delete morceau", function() {
		morceau3.setId(42);
		fileEcoute1.deleteMorceau(42);
        expect(fileEcoute1.getListeMorceau().join()).to.equal([morceau1, morceau2].join());
    });
});


describe('Lecteur', function () {

    it("should current Morceau", function() {
        expect(lecteur.getCurrentMorceau()).to.equal(morceau1);
    });

    it("should set current Morceau", function() {
        lecteur.setCurrentMorceau(morceau2)
        expect(lecteur.getCurrentMorceau()).to.equal(morceau2);
    });

    /**
     * Création des éléments DOM
     */
    document.createElement('div').setAttribute('class', 'artiste');
    document.createElement('div').setAttribute('class', 'titre');
    document.createElement('div').setAttribute('class', 'total');
    document.createElement('div').setAttribute('class', 'nb-lecture');
    document.createElement('div').setAttribute('class', 'nb-commentaires');
    document.createElement('div').setAttribute('class', 'like');
    document.createElement('div').setAttribute('class', 'share');
    document.createElement('div').setAttribute('class', 'volume');

    lecteur.setCurrentMorceau(morceau1);

    it("should initialise", function () {
        lecteur.initialisation();
        expect(document.getElementsByClassName('artiste')[0]).to.equal("Kery James");
        expect(document.getElementsByClassName('titre')[0]).to.equal("Avec le coeur et la raison");
        expect(document.getElementsByClassName('total')[0]).to.equal("2:26");
        expect(document.getElementsByClassName('nb-lectures')[0]).to.equal(0);
        expect(document.getElementsByClassName('nb-commentaires')[0]).to.equal(0);
        expect(document.getElementsByClassName('like')[0]).to.equal(0);
        expect(document.getElementsByClassName('share')[0]).to.equal(0);
        expect(document.getElementsByClassName('volume')[0]).to.equal("");
    })
});

