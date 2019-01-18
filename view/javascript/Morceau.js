/**
 * Constructeur de l'objet représentant un morceau de musique
 */
function Morceau (id, nameMusique, album, nameArtiste, cover, nblike, nbPartage, totaltime, nbPlay, nbComment, valuesWaveForm, path) {
    this.id=0;
    this.name=nameMusique;
    this.album=album
    this.artiste=nameArtiste;
    this.cover = cover;
    this.nbLike=nblike;
    this.nbPartage=nbPartage;
    this.totalTime=totaltime;
    this.nbPlay=nbPlay;
    this.nbComment=nbComment;
    this.valuesWaveform=valuesWaveForm;
	this.path = path;
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