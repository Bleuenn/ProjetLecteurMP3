/**
 * Constructeur de l'objet représentant un morceau de musique
 */
function Morceau (nameMusique,nameArtiste) {
    this.id=0;
    this.name=nameMusique;
    this.artiste=nameArtiste;
    this.cover = null;
    this.nbLike=0;
    this.nbPartage=0;
    this.totalTime=null;
    this.nbPlay=0;
    this.nbComment=0;
    this.valuesWaveform=[];
	this.path = null;
    // playList=false; // a voir si on l'intègre...
}

/**
 * 
 */
Morceau.prototype.setCover = function(path) {
    this.cover = path;
}

/**
 * 
 */
Morceau.prototype.getNbLike = function() {
    return this.nbLike;
}

/**
 * 
 */
Morceau.prototype.setNbLike = function(newNbLike) {
    this.nbLike = newNbLike;
}

/**
 * 
 */
Morceau.prototype.addOneLike = function() {
    setNbLike(getNbLike() + 1);
}

/**
 * 
 */
Morceau.prototype.getNbPartage = function() {
    return this.nbPartage;
}

/**
 * 
 */
Morceau.prototype.setNbPartage = function(newNbPartage) {
    this.nbPartage = newNbPartage;
}

/**
 * 
 */
Morceau.prototype.addOnePartage = function() {
    setNbPartage(getNbPartage() + 1);
}

/**
 * 
 */
Morceau.prototype.getNbPlay = function() {
    return this.nbPlay;
}

/**
 * 
 */
Morceau.prototype.setNbPlay = function(newNbPlay) {
    this.nbPlay=newNbPlay;
}

/**
 * 
 */
Morceau.prototype.addOnePlay = function() {
    setNbPlay(getNbPlay()+1);
}

/**
 * 
 */
Morceau.prototype.getNbComment = function() {
    return nbComment;
}

/**
 * 
 */
Morceau.prototype.setNbComment = function(newNbComment) {
    this.nbComment=newNbComment;
}

/**
 * 
 */
Morceau.prototype.addOneComment = function() {
    setNbComment(getNbComment()+1);
}

/**
 * 
 */
Morceau.prototype.getName = function() {
    return this.nameMusique;
}
/**
 * 
 */
Morceau.prototype.getArtiste = function() {
    return this.nameArtiste;
}

/**
 * 
 */
Morceau.prototype.getValuesWaveform = function(){
    return this.valuesWaveform;
}

Morceau.prototype.setValuesWaveform = function(values) {
    this.valuesWaveform = values;
}

/**
 *
 */
Morceau.prototype.setPath = function(cheminmp3){
    this.path = cheminmp3
}

Morceau.prototype.getPath = function() {
    return this.path;
}

/**
 * Création d'un fichier JSON représentatif d'une sortie d'Audiowaveform.
 * @returns {Array} tableau contenant les couples de données positives et négatives.
 */
Morceau.prototype.getData = function() {
    let json = {
        "version": 2,
        "channels": 1,
        "sample_rate": 48000,
        "samples_per_pixel": 48000,
        "bits": 8,
        "length": 451,
        "data": [2, 5, 4, 4, 1, 6, 6, 4, 2, 4, 6, 6, 5, 4, 5, 4, 3, 2, 3, 2, 3, 2, 2, 2, 3, 3, 2, 3, 4, 4, 3, 2, 2, 1, 1, 1, 2, 2, 3, 3, 4, 3, 3, 2, 3, 2, 0, 0, 1, 6, 4, 3, 1, 2, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 4, 4, 3, 4, 4, 3, 1, 1, 2, 2, 4, 4, 3, 1, 2, 5, 4, 2, 5, 5, 3, 2, 3, 4, 3, 5, 9, 10, 10, 15, 16, 13, 8, 12, 14, 13, 7, 14, 16, 11, 7, 15, 13, 13, 14, 15, 15, 9, 9, 16, 12, 7, 14, 17, 13, 8, 21, 25, 19, 5, 5, 6, 6, 4, 5, 7, 4, 3, 3, 4, 5, 7, 7, 5, 2, 4, 5, 5, 4, 5, 6, 5, 5, 5, 6, 7, 11, 12, 12, 16, 21, 18, 11, 11, 18, 15, 11, 14, 18, 17, 6, 13, 18, 13, 13, 16, 15, 13, 6, 14, 14, 11, 6, 14, 15, 9, 10, 22, 20, 17, 4, 5, 4, 4, 5, 5, 5, 6, 7, 6, 5, 4, 6, 7, 4, 1, 3, 3, 4, 3, 4, 4, 5, 5, 6, 5, 4, 5, 6, 5, 13, 15, 16, 15, 14, 17, 10, 8, 9, 7, 6, 7, 7, 7, 5, 8, 16, 16, 16, 13, 14, 13, 10, 7, 8, 9, 8, 9, 12, 9, 6, 7, 5, 7, 4, 8, 8, 8, 6, 8, 7, 7, 10, 15, 17, 23, 16, 18, 11, 4, 2, 3, 2, 2, 6, 7, 9, 5, 7, 9, 6, 5, 4, 5, 7, 11, 15, 16, 12, 8, 8, 9, 6, 5, 8, 8, 7, 6, 9, 9, 13, 17, 17, 17, 20, 17, 15, 9, 15, 15, 14, 7, 16, 17, 13, 7, 16, 17, 14, 15, 16, 17, 11, 9, 16, 14, 9, 10, 15, 15, 8, 14, 25, 21, 23, 29, 40, 32, 22, 31, 34, 31, 8, 5, 11, 7, 7, 9, 12, 8, 4, 4, 5, 7, 16, 22, 26, 25, 33, 33, 29, 21, 30, 28, 22, 23, 23, 20, 13, 21, 23, 18, 13, 25, 23, 6, 8, 14, 21, 27, 34, 33, 24, 17, 28, 24, 16, 18, 20, 14, 5, 10, 15, 20, 27, 32, 32, 27, 33, 28, 30, 31, 40, 38, 21]
    };
    return json.data;
}