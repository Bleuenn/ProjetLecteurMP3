/**
 * Constructeur de l'objet représentant un morceau de musique
 * @param id id de la musique
 * @param nameMusique nom de la musique
 * @param album nom de l'album
 * @param nameArtiste nom de l'artiste
 * @param cover chemin de la pochette
 * @param nblike nombre de like
 * @param nbPartage nombre de partage
 * @param totaltime temps totale de la musique (en seconde?)
 * @param nbPlay nombre de lecture
 * @param nbComment nombre de commentaires
 * @param valuesWaveForm tableau contenant les différentes valeurs générée par audiowaveform
 * @param path chemin du fichier mp3
 * @constructor
 */
function Morceau (id, nameMusique, album, nameArtiste, cover, nblike, nbPartage, totaltime, nbPlay, nbComment, valuesWaveForm, path) {
    this.id=id;
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
 * Modifie le chemin de la pochette d'album
 * @param path le/chemin/de/la/pochette/d'album.jpg
 */
Morceau.prototype.setCover = function(path) {
    this.cover = path;
}

/**
 * Récupère le nombre de like du morceau
 * @return {*} le nombre de like
 */
Morceau.prototype.getNbLike = function() {
    return this.nbLike;
}

/**
 * Modifie le nombre de like de la musique
 * @param newNbLike
 */
Morceau.prototype.setNbLike = function(newNbLike) {
    this.nbLike = newNbLike;
}

/**
 * Modifie le nombre de like en incrémentant (+1) et modifie en base de données
 */
Morceau.prototype.addOneLike = function() {
    let req = new XMLHttpRequest();
    this.setNbLike(this.getNbLike() + 1);
    console.log('http://localhost/ProjetLecteurMP3/index.php?page=edit&id='+this.id+'&increment=nbLike');
    req.open('GET', 'http://localhost/ProjetLecteurMP3/index.php?page=edit&id='+this.id+'&increment=nbLike', true);
    req.send(null);
};

/**
 * Récupère le nombre de partage du morceau en cours
 * @return {*} le nombre de partage du morceau en cours
 */
Morceau.prototype.getNbPartage = function() {
    return this.nbPartage;
}

/**
 * Modifie le nombre de partage du morceau en cours
 * @param newNbPartage nouveau nombre de partage
 */
Morceau.prototype.setNbPartage = function(newNbPartage) {
    this.nbPartage = newNbPartage;
}

/**
 * Modifie le nombre de partage en incrémentant (+1) et modifie en base de données
 */
Morceau.prototype.addOnePartage = function() {
    setNbPartage(getNbPartage() + 1);
}

/**
 * Récupère le nombre de lecture du morceau en cours
 * @return {*} nombre de lecture
 */
Morceau.prototype.getNbPlay = function() {
    return this.nbPlay;
}

/**
 * Modifie le nombre de lecture du morceau en cours
 * @param newNbPlay nouveau nombre de lecture
 */
Morceau.prototype.setNbPlay = function(newNbPlay) {
    this.nbPlay=newNbPlay;
}

/**
 * Modifie le nombre de lecture en incrémentant (+1) et modifie en base de données
 */
Morceau.prototype.addOnePlay = function() {
    setNbPlay(getNbPlay()+1);
}

/**
 * Récupère le nombre de commentaires
 * @return {*} le nombre de commentaires de la musique en cours
 */
Morceau.prototype.getNbComment = function() {
    return nbComment;
}

/**
 * Modifie le nombre de commentaires de la musique en cours
 * @param newNbComment nouveau nombre de commentaires
 */
Morceau.prototype.setNbComment = function(newNbComment) {
    this.nbComment=newNbComment;
}

/**
 * Modifie le nombre de commentaires en incrémentant (+1) et modifie en base de données
 */
Morceau.prototype.addOneComment = function() {
    setNbComment(getNbComment()+1);
}

/**
 * Récupère le nom de la musique en cours
 * @return {*} le nom de la musique
 */
Morceau.prototype.getName = function() {
    return this.name;
}

/**
 * Récupère le nom de l'artiste de la musique en cours
 * @return {*} le nom de l'artiste
 */
Morceau.prototype.getArtiste = function() {
    return this.nameArtiste;
}

/**
 * Récupère les valeurs de l'onde générée par Audiowaveform
 * @return {*} un tableau contenant toutes les valeurs positives
 */
Morceau.prototype.getValuesWaveform = function(){
    return this.valuesWaveform;
}

/**
 * Attribue les données récupérées depuis la base de données à la musique en cours
 * @param values tableau de valeur positives
 */
Morceau.prototype.setValuesWaveform = function(values) {
    this.valuesWaveform = values;
}

/**
 * Attribue le chemin de la musique récupéré en base de donnée à l'instance du morceau en cours
 * @param cheminmp3 chemin/de/la/musique.mp3
 */
Morceau.prototype.setPath = function(cheminmp3){
    this.path = cheminmp3
}

/**
 * Récupère le chemin du mp3 depuis l'instance de la musique en cours de lecture
 * @return {*} le/chemin/de/la/musique.mp3
 */
Morceau.prototype.getPath = function() {
    return this.path;
}