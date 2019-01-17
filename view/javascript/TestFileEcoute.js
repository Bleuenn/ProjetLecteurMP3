function TestFileEcoute() {

    var morceau1 = new Morceau("2 issues","Kery James");
    var morceau2 = new Morceau("J'ai mal au mic","Oxmo Puccino");
    var morceau3 = new Morceau("CQFD","IAM");

    morceau1.id=42;

	var listeRap1 = [morceau1, morceau2];
    var listeRap2 = [morceau1, morceau2, morceau3];
    
    var fileEcoute1 = new FileEcoute("Rap",listeRap1);	
    
    console.log("Création des listes, file écoute et morceau");

    console.log("-------------------------------------------");

    console.log("Test getId");
	console.log(fileEcoute1.getId()===0);

    console.log("Test getNamePlaylist");
    console.log();

    console.log("Test setNamePlaylist");
    fileEcoute1.setNamePlaylist("Rap2Ouf");
    console.log(fileEcoute1.getNamePlaylist()===("Rap2Ouf"));

    console.log("Test getListMorceau");
    console.log(fileEcoute1.getListeMorceau()===listeRap1);

    /*console.log("Test setListMorceau");
	fileEcoute1.setListeMorceau(listeRap2);
    console.log(fileEcoute1.getListeMorceau()==listeRap2);*/
    
    console.log("Test addMorceau");
    fileEcoute1.addMorceau(morceau3);
    console.log(fileEcoute1.getListeMorceau());

	console.log("Test deleteMorceau");
	fileEcoute1.deleteMorceau(42);
    console.log(fileEcoute1.getListeMorceau());
}