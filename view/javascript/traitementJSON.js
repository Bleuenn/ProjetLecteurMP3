/**
 * Création d'un fichier JSON représentatif d'une sortie d'Audiowaveform.
 * @returns {Array} tableau contenant les couples de données positives et négatives.
 */

var volume = "25";

function getData() {
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

function getWidthWaveForm() {
	let element = document.getElementsByClassName('waveform')[0];
	let style = window.getComputedStyle(element);
	let largeur = style.getPropertyValue('width');

	return parseInt(largeur);
}

function getHeightWaveForm() {
	let element = document.getElementsByClassName('waveform')[0];
	let style = window.getComputedStyle(element);
	let height = style.getPropertyValue('height');

	return parseInt(height);
}

function getMax() {
	let tab = getData();
	let max = 0;

	for (let i = 1; i < tab.length; i++) {
		if (tab[i] > max) {
			max = tab[i];
		}
	}

	return max;
}

function resizeBar() {
	let svg = document.getElementById('svg');
	svg.innerHTML ="";
	drawSvg(getData());
}

function changeVolume(valeur) {
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
	volume = valeur;
}

/**
 * Cette fonction permet de calculer le nombre de barre que doit posséder le SVG
 * en fonction de la largeur de la fenêtre
 * @returns nombreBarre le nombre de barre en fonction de la largeur de l'écran
 */
function getNombreBarresResponsive(largeurEcran) {
	let nombreDeBarres = largeurEcran / 7;
	return Math.round(nombreDeBarres);
}

/**
 * Dessine dans une balise SVG les barres verticales d'une hauteur différente en
 * fonction des différentes valeurs du fichier JSON généré par audiowaveform
 * @param data
 */
function drawSvg(data) {
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


	for (let i = 0; i < data.length; i++) {
		let rect = document.createElementNS(w3c, 'rect'),
			reverse = document.createElementNS(w3c, 'rect'),
			value = (getHeightWaveForm() * data[i]) / maxHBar,
			horizon = (height * 2) / 3; // permet de remonter les barres pour insérer l'effet mirroir en dessous

		if (value === 0) {
			value = 6;
		}

		//rect.setAttributeNS(null, "class", "barreSvg");
		rect.setAttributeNS(null, "id", "barreNumero" + i);
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

/**
 * Joue la musique musique en paramètre.
 * @param chemin chemin de la musique.
 */
function player(chemin) {
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
 * Fonction main...
 */
function main() {
	drawSvg(getData());

	window.addEventListener('resize', function () {
		resizeBar()
	}, false);

	player('../../python/flowers.mp3');
}

main();

let rect = document.querySelectorAll('rect')[0];
let btnVolume = document.getElementsByClassName('volume')[0];
let range = null;

btnVolume.addEventListener('mouseover', function (e) {
	if (range === null) {
		range = document.createElement("input");
		range.setAttribute("type", "range");
		range.setAttribute("id", "range");
		range.setAttribute("value", volume);

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
