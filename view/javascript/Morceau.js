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
Morceau.prototype.getWaveform = function(){
    return this.valuesWaveform
}