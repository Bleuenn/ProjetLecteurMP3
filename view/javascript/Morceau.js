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
 * Retourne l'id du Morceau
 */
Morceau.prototype.getId = function() {
	return this.id;
};

/**
 * Modifie l'id du Morceau
 */
Morceau.prototype.setId = function(newId) {
	this.id = newId;
};

/**
 * Récupère le nom de la musique en cours
 * @return {*} le nom de la musique
 */
Morceau.prototype.getName = function() {
    return this.name;
}

/**
 * Récupère l'album de la musique en cours
 * @return {*} le nom de l'album
 */
Morceau.prototype.getAlbum = function() {
    return this.album;
}

/**
 * Récupère le nom de l'artiste de la musique en cours
 * @return {*} le nom de l'artiste
 */
Morceau.prototype.getArtiste = function() {
    return this.nameArtiste;
}

/**
 * Récupère la couverture de la jacket de la musique en cours
 * @return {*} le path de la jacket
 */
Morceau.prototype.getCover = function() {
    return this.cover;
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
    if(getCookie("like") === null){
        let req = new XMLHttpRequest();
        this.setNbLike(this.getNbLike() + 1);
        req.open('GET', 'http://'+window.location.host+'/ProjetLecteurMP3/index.php?page=edit&id='+this.id+'&increment=nbLike', true);
        req.send(null);
        setCookie("like", true);
    }
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
    if(getCookie("share") === null){
        let req = new XMLHttpRequest();
        this.setNbPartage(this.getNbPartage() + 1);
        req.open('GET', 'http://'+window.location.host+'/ProjetLecteurMP3/index.php?page=edit&id='+this.id+'&increment=nbPartage', true);
        req.send(null);

        setCookie("share", true);
    }
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
    if(getCookie("play") === null){
        let req = new XMLHttpRequest();
        this.setNbPlay(this.getNbPlay()+1);
        req.open('GET', 'http://'+window.location.host+'/ProjetLecteurMP3/index.php?page=edit&id='+this.id+'&increment=nbEcoute', true);
        req.send(null);

        setCookie("play", true);
    }
}

/**
 * Retourne le temps total du Morceau
 */
Morceau.prototype.getTotalTime = function() {
    return this.totalTime;
}

/**
 * Récupère le nombre de commentaires
 * @return {*} le nombre de commentaires de la musique en cours
 */
Morceau.prototype.getNbComment = function() {
    return this.nbComment;
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
 * Récupère le chemin du mp3 depuis l'instance de la musique en cours de lecture
 * @return {*} le/chemin/de/la/musique.mp3
 */
Morceau.prototype.getPath = function() {
    return this.path;
}

/**
 * Attribue le chemin de la musique récupéré en base de donnée à l'instance du morceau en cours
 * @param cheminmp3 chemin/de/la/musique.mp3
 */
Morceau.prototype.setPath = function(cheminmp3){
    this.path = cheminmp3
}

/**
 * Permet de transformer les millisecondes en minutes et secondes sous format "minutes:secondes"
 * @param milliseconds
 * @return {string}
 */
Morceau.prototype.formatMillisecondes = function(milliseconds) {
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
}

function getCookie(sName) {
    var cookContent = document.cookie, cookEnd, i, j;
    var sName = sName + "=";

    for (i=0, c=cookContent.length; i<c; i++) {
        j = i + sName.length;
        if (cookContent.substring(i, j) == sName) {
            cookEnd = cookContent.indexOf(";", j);
            if (cookEnd == -1) {
                cookEnd = cookContent.length;
            }
            return decodeURIComponent(cookContent.substring(j, cookEnd));
        }
    }
    return null;
}

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365*24*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
}
