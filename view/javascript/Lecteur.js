/**
 * Constructeur de l'objet représentant le lecteur
 * @constructor
 */
function Lecteur () {
    this.currentMorceau=null;
    this.currentTime=null;
    this.volume=25;
    // playList=false; // a voir si on l'intègre...
}

/**
 * Retourne le temps courant du morceau
 */
Lecteur.prototype.getCurrentTime = function() {
    return this.currentTime;
}

/**
 * Modifie le temps courant du morceau
 * @param {*} newTime nouveau temps courant
 */
Lecteur.prototype.setCurrentTime = function(newTime) {
    this.currentTime=newTime;
}

/**
 * Retourne le morceau courant
 */
Lecteur.prototype.getCurrentMorceau = function() {
    return this.currentMorceau;
}

/**
 * Modifie le morceau courant
 * @param {*} newMorceau objet représentant le nouveau morceau
 */
Lecteur.prototype.setCurrentMorceau = function(newMorceau) {
    this.currentMorceau=newMorceau;
}

/**
 * Modifie le volume courant
 */
Lecteur.prototype.getVolume = function() {
    return this.volume;
}

/**
 * Modifie le volume
 * @param {*} newVolume nouveau volume
 */
Lecteur.prototype.setVolume = function(newVolume) {
    this.volume=newVolume;
}

/**
 * Initialisation d'un son écoutable depuis le player grace a l'API soundManager2
 * @return retourne un objet soundManager
 */
Lecteur.prototype.createSound = function() {

	return soundManager;
}

/**
 * Récupère la largeur (en pixel) de la div qui contient l'onde générée par audiowaveform
 * @return {number} la largeur en pixel de la div .waveform
 */
Lecteur.prototype.getWidthWaveForm = function() {
    let element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        width = style.getPropertyValue('width');
    
    return parseInt(width);
}

/**
 * Récupère la hauteur (en pixel) de la div qui contient l'onde générée par audiowaveform
 * @returns {number} la hauteur en pixel de la div .waveform
 */
Lecteur.prototype.getHeightWaveForm = function() {
    let element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height');
        
    return parseInt(height);
}

/**
 * Retourne la valeur maximale entre toutes les données récupérées du fichier JSON générée par Audiowaveform
 * @returns {number} valeur maximale du JSON
 */
Lecteur.prototype.getMax = function() {
	let tab = this.currentMorceau.getValuesWaveform();
	let max = 0;

	for (let i = 1; i < tab.length; i++) {
		if (tab[i] > max) {
			max = tab[i];
		}
	}

	return max;
}

/**
 * Supprime les indices impairs du tableau en paramètre.
 * @param data tableau contenant les couples de données positives et négatives.
 * @returns {Array} tableau avec seulement des données positives.
 */
function deleteOdd(data) {
	//console.log(data.length);
	let tableau = [];
	for (let i = 1; i < data.length - 1; i = i + 2) {
		//console.log(data[i]);
		tableau.push(Math.floor(data[i] * 2));
	}
	return tableau;
}

/**
 * Dessine dans une balise SVG les barres verticales d'une hauteur différente en
 * fonction des différentes valeurs du fichier JSON généré par audiowaveform
 * @param values
 */
Lecteur.prototype.drawSVG = function(values) {
    let svg = document.getElementById('svg'),
		height = this.getHeightWaveForm(),
		width = this.getWidthWaveForm(),
		largeurRect = Math.ceil(this.getNombreBarresResponsive(window.innerWidth) / 100 + 1),
		w3c = "http://www.w3.org/2000/svg";

	let maxHBar = this.getMax();
	let nombreDeBarre = this.getNombreBarresResponsive(window.innerWidth);

	for (let i = 0; i < values.length; i++) {
		let rect = document.createElementNS(w3c, 'rect'),
			reverse = document.createElementNS(w3c, 'rect'),
			value = (this.getHeightWaveForm() * values[i]) / maxHBar,
			horizon = (height * 2) / 3; // permet de remonter les barres pour insérer l'effet mirroir en dessous

		if (value === 0) {
			value = 6;
		}

		//rect.setAttributeNS(null, "class", "barreSvg");
		//rect.setAttributeNS(null, "id", "barreNumero" + i);
		rect.setAttributeNS(null, "x", i * width / nombreDeBarre);
		rect.setAttributeNS(null, "y", horizon - value);
		rect.setAttributeNS(null, "width", largeurRect);
		rect.setAttributeNS(null, "height", value);

		//reverse.setAttributeNS(null, "id", "reverseNumero" + i);
		reverse.setAttributeNS(null, "class", "reverse");
		reverse.setAttributeNS(null, "x", i * width / nombreDeBarre);
		reverse.setAttributeNS(null, "y", horizon + 3);
		reverse.setAttributeNS(null, "width", largeurRect);
		reverse.setAttributeNS(null, "height", value / 2);
		//reverse.setAttributeNS(null, "style", "fill: red !important");

		svg.appendChild(rect);
		svg.appendChild(reverse);
    }
}

/**
 * Efface les différents SVG présent sur le lecteur et redessine l'onde audiowaveform
 */
Lecteur.prototype.resizeBar = function() {
	let svg = document.getElementById('svg');
	svg.innerHTML ="";
	this.drawSVG(this.currentMorceau.getValuesWaveform());
}

/**
 * Cette fonction permet de calculer le nombre de barre que doit posséder le SVG
 * en fonction de la largeur de la fenêtre
 * @returns nombreBarre le nombre de barre en fonction de la largeur de l'écran
 */
Lecteur.prototype.getNombreBarresResponsive = function(largeurEcran) {
	let nombreDeBarres = largeurEcran / 7; // divisé par 7 pour avoir un ratio pour un juste milieu entre trop et pas assez de barres
	return Math.round(nombreDeBarres);
}

/**
 * Joue la musique musique en paramètre.
 * @param chemin chemin de la musique.
 */
Lecteur.prototype.player = function(chemin) {
	let musique = new Audio(chemin);
	let boutonLecteur = document.getElementsByClassName('play')[0];
	let enLecture = false;

	boutonLecteur.addEventListener('click', function () {

		if (!enLecture) {
			musique.play();
			enLecture = true;
			boutonLecteur.innerText = "";
		} else {
			musique.pause();
			enLecture = false;
			musique.currentTime = 0;
			boutonLecteur.innerText = "";
		}
	});
}

/**
 * Permet de faire l'initialisation des éléments du lecteur
 */
Lecteur.prototype.initialisation = function() {
	let rect = document.querySelectorAll('rect')[0];

	//Initialisation Cover
    let cover = document.getElementsByClassName('visuel')[0];
    let image = document.createElement("img");
    image.setAttribute("src", this.getCurrentMorceau().cover);
    cover.appendChild(image);

	//Initialisation Infos
    let artiste = document.getElementsByClassName('artiste')[0];
    let titre = document.getElementsByClassName('titre')[0];

    artiste.appendChild(document.createTextNode(this.getCurrentMorceau().artiste));
    titre.appendChild(document.createTextNode(this.getCurrentMorceau().name));

    //Initialisation Temps
    let totalTime = document.getElementsByClassName('total')[0];
    let minutes = Math.floor(this.getCurrentMorceau().totalTime / 60);
    let seconds = this.getCurrentMorceau().totalTime - minutes * 60;

    totalTime.appendChild(document.createTextNode(minutes+":"+seconds));

    //Initialisation statistiques
    let nbLecture = document.getElementsByClassName("nb-lectures")[0];
    let nbCommentaire = document.getElementsByClassName("nb-commentaires")[0];

    nbLecture.appendChild(document.createTextNode(this.getCurrentMorceau().nbPlay));
    nbCommentaire.appendChild(document.createTextNode(this.getCurrentMorceau().nbComment));

    //Initialisation social
    let like = document.getElementsByClassName("like")[0];
    let share = document.getElementsByClassName("share")[0];

    like.appendChild(document.createTextNode(this.getCurrentMorceau().nbLike));
    share.appendChild(document.createTextNode(this.getCurrentMorceau().nbPartage));

    let btnVolume = document.getElementsByClassName('volume')[0];

	btnVolume.addEventListener('mouseover', function (e) {
        let range = document.getElementById("range");

        if( range === null){
            range = document.createElement("input");
            range.setAttribute("type", "range");
            range.setAttribute("id", "range");
            range.setAttribute("value", 10);
            btnVolume.parentNode.appendChild(range);
        }
        else{
            range.style.display = "block";
        }

        range.addEventListener("mouseout", function (e) {

            let btnVolume = document.getElementsByClassName('volume')[0];
            if (range.value <= 2) { btnVolume.innerText = "";}
            else if (range.value <= 33) { btnVolume.innerText = "";}
            else if (range.value <= 66) { btnVolume.innerText = ""; }
            else if (range.value <= 100) { btnVolume.innerText = "";}

            range.style.display = "none";
        });

	}, true);
}