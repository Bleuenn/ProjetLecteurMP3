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
    describe('Lecteur', function () {
        it("should delete morceau", function () {
            expect(fileEcoute1.deleteMorceau(42)).to.equal(0);
        });
    })
});

describe('Morceau', function () {
    it("should delete morceau", function() {
        expect(fileEcoute1.deleteMorceau(42)).to.equal(0);
    });
});