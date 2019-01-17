/**
 * Constructeur de l'objet représentant le lecteur
 */
function Lecteur () {
    currentMorceau=null;
    currentTime=null;
    volume=25;
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
 * 
 */
Lecteur.prototype.createSound = function() {
    
}

/**
 *
 * @returns {number}
 */
Lecteur.prototype.getWidthWaveForm = function() {
    let element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        width = style.getPropertyValue('width');
    
    return parseInt(width);
}

/**
 *
 * @returns {number}
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
		height = getHeightWaveForm(),
		width = getWidthWaveForm(),
		largeurRect = Math.ceil(getNombreBarresResponsive(window.innerWidth) / 100 + 1),
		w3c = "http://www.w3.org/2000/svg";

	//console.log(largeurRect);
	//console.log(data.length);

	let maxHBar = getMax();
	// let nombreDeBarre = getNombreBarresResponsive(window.innerWidth) > 6 ? getNombreBarresResponsive(window.innerWidth) : 5;
	let nombreDeBarre = getNombreBarresResponsive(window.innerWidth);


	for (let i = 0; i < values.length; i++) {
		let rect = document.createElementNS(w3c, 'rect'),
			reverse = document.createElementNS(w3c, 'rect'),
			value = (getHeightWaveForm() * values[i]) / maxHBar,
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
		//rect.setAttributeNS(null, "style", "fill: white");

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

Lecteur.prototype.resizeBar = function() {
	let svg = document.getElementById('svg');
	svg.innerHTML ="";
	drawSvg(Morceau.getValuesWaveform());
}

Lecteur.prototype.changeVolume = function(valeur) {
	let btnVolume = document.getElementsByClassName('volume')[0];
	if (valeur === 0) {
		btnVolume.innerText = "";
	} else if (valeur <= 25) {
		btnVolume.innerText = "";
	} else if (valeur <= 50) {
		btnVolume.innerText = "";
	} else if (valeur <= 75) {
		btnVolume.innerText = "";
	}
	this.Lecteur.setVolume(valeur);
}

/**
 * Cette fonction permet de calculer le nombre de barre que doit posséder le SVG
 * en fonction de la largeur de la fenêtre
 * @returns nombreBarre le nombre de barre en fonction de la largeur de l'écran
 */
Lecteur.prototype.getNombreBarresResponsive = function(largeurEcran) {
	let nombreDeBarres = largeurEcran / 7; // divisé par 7 pour avoir un ratio pour un juste milieu en trop et pas assez de barres
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
			boutonLecteur.innerText = "";
		} else {
			musique.pause();
			enLecture = false;
			musique.currentTime = 0;
			boutonLecteur.innerText = "";
		}
	});
}

/**
 * Permet de faire l'initialisation des éléments du lecteur
 */
Lecteur.prototype.initialisation = function() {
	let rect = document.querySelectorAll('rect')[0];
	let btnVolume = document.getElementsByClassName('volume')[0];
	let range = null;

	btnVolume.addEventListener('mouseover', function (e) {
		if (range === null) {
			range = document.createElement("input");
			range.setAttribute("type", "range");
			range.setAttribute("id", "range");
			range.setAttribute("value", this.currentMorceau.getVolume());

			btnVolume.parentNode.appendChild(range);

			range.addEventListener("mouseout", function (e) {
				//console.log(range.value);
				//console.log(volume);
				changeVolume(range.value);
				btnVolume.parentNode.removeChild(range);
				range = null;
			});
		}
	});
}

Lecteur.prototype.main = function() {
	Lecteur.prototype.initialisation;

	let morceau = new Morceau("Doing Yoga", "Kazy Lambist");
	let lecteur = new Lecteur();
	lecteur.setCurrentMorceau(morceau);
	let data = morceau.getData();
	morceau.setValuesWaveform(data);
	// morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform())
	console.log("data: "+ data);
	console.log("nblike: "+this.currentMorceau.getNbLike());
	console.log("values: "+this.getValuesWaveform());

	this.drawSvg(this.getValuesWaveform);
	window.addEventListener('resize', function () {
		this.resizeBar();
	}, false);

	this.player(this.currentMorceau.getPath());
}

Lecteur.prototype.main();