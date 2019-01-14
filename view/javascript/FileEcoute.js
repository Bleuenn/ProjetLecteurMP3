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

FileEcoute.prototype.deleteMorceau = function(idSelection){

	this.liste.forEach((element) => { 
		if (element.id==idMorceau){
			console.log("ok");
		};
	});
}
