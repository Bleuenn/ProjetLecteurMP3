"use strict";
let expect = chai.expect;

describe('FileEcoute', function() {
    let morceau1 = new Morceau("2 issues","Kery James");
    let morceau2 = new Morceau("J'ai mal au mic","Oxmo Puccino");
    let morceau3 = new Morceau("CQFD","IAM");
    morceau1.id=42;
    let listeRap1 = [morceau1, morceau2];
    let listeRap2 = [morceau1, morceau2, morceau3];
    let fileEcoute1 = new FileEcoute("Rap",listeRap1);

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
        expect(fileEcoute1.getListeMorceau()).to.equal(0);
    });

    it("should delete morceau", function() {
        expect(fileEcoute1.deleteMorceau(42)).to.equal(0);
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

    let morceau = new Morceau(1, "Avec le coeur et la raison", "Réel","Kery James", "view/img/reel.jpg", 0, 0, 146, 0, 0, [1, 2, 3], "musique/mp3/reel.mp3");
    lecteur = new Lecteur();
    lecteur.currentMorceau(morceau);

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

describe('Morceau', function () {
    it("should delete morceau", function() {
        expect(fileEcoute1.deleteMorceau(42)).to.equal(0);
    });
});