/**
 * Constructeur de l'objet représentant un morceau de musique
 */
function Morceau(nameMusique,nameArtiste) {
    id=null;
    name=nameMusique;
    artiste=nameArtiste;
    cover = "";
    nbLike=0;
    nbPartage=0;
    totalTime=null;
    nbPlay=0;
    nbComment=0;
    valuesWaveform=[];
    // playList=false; // a voir si on l'intègre...
}

/**
 * Attribue le chemin de la pochette d'album de la musique
 * @param path chemin de la musique
 */
Morceau.prototype.setCover = function(path) {
    this.cover = path;
}

Morceau.prototype.getNbLike = function() {
    return this.nbLike;
}

Morceau.prototype.setNbLike = function(newNbLike) {
    this.nbLike = newNbLike;
}

Morceau.prototype.addOneLike = function() {

}

Morceau.prototype.setNbPartage = function(newNbPartage) {
    this.nbPartage = newNbPartage;
}

Morceau.prototype.getNbPartage = function() {

}

Morceau.prototype.addOnePartage = function() {

}

Morceau.prototype.setNbPlay = function(newNbPlay) {
    this.nbPlay = newNbPlay;
}

Morceau.prototype.getNbPlay = function() {

}

Morceau.prototype.addOnePlay = function() {

}

Morceau.prototype.setNbComment = function(newNbComment) {
    this.nbComment = newNbComment;
}

Morceau.prototype.getNbComment = function() {

}

Morceau.prototype.addOneComment = function() {

}

Morceau.prototype.getName = function() {
    return this.name;
}

Morceau.prototype.getArtiste = function() {
    return this.artiste;
}
