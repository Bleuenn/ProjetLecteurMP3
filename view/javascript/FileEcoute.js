/**
 *
 * Constructeur de l'objet représentant une file d'écoute
 * @param name nom de la liste d'écoute
 * @param liste liste des morceaux
 * @constructor
 */
function FileEcoute(name,liste,morceauListen) {
		this.id=0;
		this.name=name;
		this.liste=liste;
		this.morceau=morceauListen;
}

/**
 * Retourne l'id de la file d'écoute
 */
FileEcoute.prototype.getId = function() {
	return this.id;
};

/**
 * Retourne l'id de la file d'écoute
 */
FileEcoute.prototype.setId = function(newId) {
	this.id = newId;
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
 * Modifie la file d'écoute
 *  @param {*} newName la nouvelle file d'écoute
 */
FileEcoute.prototype.setListeMorceau = function(newListe){
	this.liste=newListe;
	};

/**
 * 
 * @param {*} morceau le morceau à ajouter à la file d'écoute
 */
FileEcoute.prototype.addMorceau = function(morceau) {
	this.liste.push(morceau);
};

/**
 * Supprime le morceau de la file d'écoute
 */
FileEcoute.prototype.deleteMorceau = function(targetId){

	this.liste.forEach((element) => { 
		if (element.id===targetId){
			this.liste.splice(this.liste.indexOf(element),1);
		};
	});
}

/**
 * 
 */
FileEcoute.prototype.nextMorceau = function(){
    var posMorceau = 0;

    for(var i = 0; i < this.liste.length; i++){
        if(this.morceau.id === this.liste[i].id){
            posMorceau = i;
        }
    }

    if( posMorceau +1 > this.liste.length -1){
        this.morceau = this.liste[0];
    }else{
        this.morceau = this.liste[posMorceau +1];
    }

    return this.morceau;
}

/**
 * 
 */
FileEcoute.prototype.previousMorceau = function(){
    var posMorceau = 0;

    for(var i = 0; i < this.liste.length; i++){
        if(this.morceau.id === this.liste[i].id){
            posMorceau = i;
        }
    }

    if( posMorceau -1 < 0){
        this.morceau = this.liste[this.liste.length-1];
    }else{
        this.morceau = this.liste[posMorceau -1];
    }

    return this.morceau;
}

