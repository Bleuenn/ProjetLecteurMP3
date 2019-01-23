"use strict";
let expect = chai.expect;

var morceau = new Morceau(1, "Avec le coeur et la raison", "Réel","Kery James", "view/img/reel.jpg", 0, 0, 146, 0, 0, [1, 2, 3], "musique/mp3/reel.mp3");

var morceau1 = new Morceau();
var morceau2 = new Morceau();
var morceau3 = new Morceau();

var listeRap1 = [morceau1, morceau2];
var listeRap2 = [morceau1, morceau2, morceau3];

var fileEcoute1 = new FileEcoute("Rap",listeRap1);

var lecteur = new Lecteur();

describe('Morceau', function () {
//id
	
it("should get id", function() {
    expect(morceau.getId()).to.equal(1);
});

it("should set id", function() {
    morceau.setId(42);
    expect(morceau.getId()).to.equal(42);
});

//name

it("should get name", function() {
    expect(morceau.getName()).to.equal("Avec le coeur et la raison");
});

//Like

it("should get nb like", function() {
    expect(morceau.getNbLike()).to.equal(0);
});

it("should set nb like", function() {
    morceau.setNbLike(42);
    expect(morceau.getNbLike()).to.equal(42);
});

it("should add one like", function() {
    morceau.addOneLike();
    expect(morceau.getNbLike()).to.equal(43);
});

//Partage

it("should get nb Partage", function() {
    expect(morceau.getNbPartage()).to.equal(0);
});

it("should set nb Partage", function() {
    morceau.setNbPartage(42);
    expect(morceau.getNbPartage()).to.equal(42);
});

it("should add one Partage", function() {
    morceau.addOnePartage();
    expect(morceau.getNbPartage()).to.equal(43);
});

//Play

it("should get nb Play", function() {
    expect(morceau.getNbPlay()).to.equal(0);
});

it("should set nb Play", function() {
    morceau.setNbPlay(42);
    expect(morceau.getNbPlay()).to.equal(42);
});

it("should add one Play", function() {
    morceau.addOnePlay();
    expect(morceau.getNbPlay()).to.equal(43);
});

//Comment

it("should get nb Comment", function() {
    expect(morceau.getNbComment()).to.equal(0);
});

it("should set nb Comment", function() {
    morceau.setNbComment(42);
    expect(morceau.getNbComment()).to.equal(42);
});

it("should add one Comment", function() {
    morceau.addOneComment();
    expect(morceau.getNbComment()).to.equal(43);
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

    lecteur.setCurrentMorceau(morceau);

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

