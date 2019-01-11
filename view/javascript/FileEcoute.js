/**
 * Constructeur de l'objet représentant une file d'écoute
 * @param {*} name nom de la liste d'écoute
 * @param {*} liste liste des morceaux
 */
function FileEcoute(name,liste) {
		this.id=0;
		this.name=name;
		this.liste=liste;	
	}
/**
 * Retourne l'id de la file d'écoute
 */
FileEcoute.prototype.getId = function() {
	return this.id;
	};

/**
 * Retourne le nom de la file d'écoute
 */
FileEcoute.prototype.getNamePlaylist = function() {
	return this.name;
	};

/**
 * Modifie le nom de la file d'écoute
 *  @param {*} newName le nouveau nom de la file d'écoute
 */
FileEcoute.prototype.setNamePlaylist = function(newName) {
	this.name=newName;
	};

/**
 * Retourne la liste des morceaux de la file d'écoute
 */
FileEcoute.prototype.getListeMorceau = function() {
    return this.liste;
    };

/**
 * Modifie le nom de la file d'écoute
 *  @param {*} newName le nouveau nom de la file d'écoute
 */
/*FileEcoute.prototype.setListeMorceau = function(newListe){
	this.liste=newListe;
	};*/

/**
 * 
 * @param {*} morceau le morceau à ajouter à la file d'écoute
 */
FileEcoute.prototype.addMorceau = function(morceau) {
	this.liste.push(morceau);
};

/*FileEcoute.prototype.deleteMorceau = function(){
	this.liste.delete[arguments[0] id ];
}*/

FileEcoute.prototype.test = function() {

	console.log("Création des listes, file écoute et morceau")
	var listeRap = ["FF","IAM"];
	var listeRap2 = ["Scred Connexion, Oxmo Puccino"]
	var fileEcoute1 = new FileEcoute("Rap",listeRap);	
	var newMusique = "Kery James";

	console.log("Test get/set name");
	//fileEcoute1.setNamePlaylist("Rap2Ouf");
	fileEcoute1.getNamePlaylist();

	console.log("Test get/set Morceau");
	//fileEcoute1.setListeMorceau(listeRap2);
	//console.log(fileEcoute1.getListeMorceau());

	console.log("Test getId");
	//fileEcoute1.getId();

	console.log("Test addMorceau");
	//fileEcoute1.addMorceau(newMusique);
	//console.log(fileEcoute1.getListeMorceau());

	console.log("Test deleteMorceau");
	//fileEcoute1.deleteMorceau(0);
	//console.log(fileEcoute1.getListeMorceau());
};
