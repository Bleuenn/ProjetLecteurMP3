/**
 * Constructeur de l'objet représentant un morceau de musique
 */
function Morceau (nameMusique,nameArtiste) {
    id=0;
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
    setNbLike(getNbLike() + 1);
}

Morceau.prototype.setNbPartage = function(newNbPartage) {
    this.nbPartage = newNbPartage;
}

Morceau.prototype.getNbPartage = function() {
    setNbPartage(getNbPartage() + 1);
}

Morceau.prototype.addOnePartage = function() {
    
}

Morceau.prototype.getNbPlay = function() {
    
}

Morceau.prototype.addOnePlay = function() {
    
}

Morceau.prototype.getNbComment = function() {
    
}

Morceau.prototype.addOneComment = function() {
    
}

Morceau.prototype.getName = function() {
    
}

Morceau.prototype.getArtiste = function() {
    
}