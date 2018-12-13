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
		"data": [-6, 6, -8, 9, -9, 7, -9, 9, -5, 5, -11, 10, -12, 11, -13, 10, -8, 8, -6, 6, -12, 11, -10, 8, -13, 11, -13, 11, -9, 8, -10, 9, -8, 9, -7, 6, -5, 6, -5, 4, -6, 5, -5, 5, -6, 5, -6, 7, -5, 6, -4, 4, -5, 4, -7, 7, -6, 8, -5, 6, -5, 5, -8, 7, -8, 9, -7, 7, -5, 5, -5, 4, -5, 5, -4, 4, -2, 2, -3, 3, -4, 3, -5, 5, -6, 7, -6, 6, -7, 7, -7, 8, -11, 11, -8, 8, -5, 4, -7, 7, -7, 8, -4, 2, -1, 2, -3, 3, -10, 11, -13, 14, -8, 8, -7, 8, -3, 3, -6, 6, -5, 5, -2, 2, -4, 4, -4, 3, -2, 1, 0, 0, 0, 0, -1, 1, -2, 2, -2, 2, -2, 1, -2, 2, -6, 5, -10, 9, -8, 8, -7, 5, -7, 7, -9, 8, -9, 8, -5, 6, -4, 3, -2, 3, -5, 5, -6, 6, -7, 8, -8, 9, -7, 7, -4, 4, -3, 3, -8, 8, -8, 10, -7, 8, -5, 7, -8, 10, -9, 9, -11, 9, -5, 4, -6, 6, -8, 7, -7, 7, -7, 7, -12, 12, -15, 15, -16, 14, -19, 19, -36, 28, -26, 24, -28, 25, -24, 26, -14, 15, -21, 18, -26, 27, -25, 29, -16, 19, -29, 23, -30, 29, -19, 21, -18, 18, -18, 19, -30, 28, -20, 20, -25, 24, -28, 26, -22, 25, -25, 25, -27, 26, -17, 15, -23, 20, -27, 28, -21, 19, -15, 13, -29, 26, -25, 26, -31, 27, -16, 19, -32, 29, -35, 31, -60, 35, -37, 40, -9, 11, -11, 11, -13, 12, -10, 11, -12, 9, -8, 8, -8, 10, -11, 13, -9, 9, -7, 6, -7, 6, -8, 7, -11, 9, -13, 14, -11, 12, -12, 13, -9, 7, -5, 7, -12, 15, -10, 11, -10, 9, -9, 8, -8, 10, -8, 10, -11, 11, -9, 7, -8, 11, -9, 9, -10, 10, -12, 10, -15, 14, -22, 24, -25, 23, -19, 22, -33, 30, -28, 29, -29, 23, -18, 21, -25, 26, -30, 33, -32, 28, -23, 23, -21, 24, -33, 32, -27, 31, -30, 30, -12, 13, -21, 20, -29, 30, -22, 25, -23, 22, -25, 23, -23, 24, -26, 31, -19, 23, -25, 20, -28, 24, -22, 24, -23, 19, -11, 13, -25, 19, -23, 25, -25, 23, -11, 12, -30, 23, -35, 35, -33, 33, -33, 33, -11, 10, -10, 10, -7, 8, -11, 11, -7, 6, -11, 9, -9, 9, -10, 9, -10, 10, -14, 13, -13, 15, -8, 9, -10, 9, -8, 9, -10, 12, -11, 10, -8, 8, -3, 4, -6, 6, -9, 8, -7, 8, -9, 9, -8, 7, -6, 7, -6, 6, -8, 9, -8, 8, -10, 12, -10, 10, -8, 8, -6, 7, -10, 8, -12, 11, -9, 9, -36, 33, -29, 26, -27, 28, -22, 24, -22, 22, -30, 35, -22, 17, -15, 18, -14, 18, -21, 23, -13, 12, -13, 11, -14, 12, -11, 12, -10, 11, -10, 11, -12, 12, -25, 21, -25, 29, -27, 22, -26, 33, -24, 24, -22, 21, -18, 22, -18, 26, -13, 16, -15, 13, -16, 19, -14, 16, -17, 17, -12, 16, -24, 17, -24, 27, -17, 15, -8, 10, -13, 12, -11, 10, -12, 10, -8, 8, -14, 13, -11, 12, -12, 13, -11, 14, -13, 16, -14, 12, -14, 12, -13, 11, -20, 20, -25, 24, -29, 26, -41, 37, -38, 42, -24, 31, -33, 37, -24, 28, -8, 8, -4, 5, -6, 7, -6, 5, -4, 6, -11, 9, -13, 16, -13, 13, -12, 11, -8, 9, -13, 14, -14, 17, -11, 14, -12, 10, -6, 8, -9, 9, -10, 13, -14, 16, -18, 20, -28, 24, -26, 25, -17, 19, -15, 15, -19, 14, -13, 12, -18, 13, -10, 8, -13, 12, -15, 14, -14, 14, -13, 13, -9, 9, -14, 16, -15, 12, -17, 17, -27, 29, -31, 31, -22, 22, -28, 33, -35, 33, -31, 28, -26, 31, -22, 21, -27, 20, -26, 29, -31, 28, -21, 21, -18, 19, -30, 25, -25, 31, -23, 24, -14, 18, -25, 23, -29, 29, -22, 22, -30, 26, -30, 26, -24, 24, -29, 27, -19, 19, -20, 19, -25, 23, -30, 31, -31, 26, -17, 18, -21, 24, -22, 22, -24, 28, -15, 17, -23, 25, -39, 40, -37, 42, -40, 42, -42, 40, -52, 61, -56, 76, -49, 48, -41, 45, -47, 50, -52, 49, -60, 53, -42, 36, -6, 9, -12, 14, -15, 15, -15, 13, -11, 12, -14, 17, -20, 19, -18, 17, -12, 16, -8, 8, -9, 9, -9, 11, -17, 15, -26, 30, -33, 37, -42, 37, -45, 39, -47, 48, -53, 60, -47, 42, -38, 39, -38, 41, -46, 49, -38, 43, -54, 41, -37, 46, -45, 36, -38, 37, -31, 34, -31, 29, -37, 35, -36, 33, -29, 30, -27, 26, -44, 39, -40, 39, -33, 37, -11, 10, -22, 19, -29, 29, -46, 44, -39, 51, -55, 66, -57, 53, -55, 57, -26, 26, -44, 54, -49, 41, -39, 45, -24, 25, -35, 34, -32, 31, -33, 31, -9, 8, -13, 17, -23, 24, -40, 29, -40, 43, -51, 49, -58, 50, -63, 59, -57, 48, -51, 55, -49, 56, -44, 46, -49, 55, -75, 65, -68, 64, -72, 75, -76, 64, -3, 3, 0, 0, 0, 0]
	};
	return deleteOdd(json.data);
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
	while (svg.firstChild) {
		svg.removeChild(svg.firstChild);
	}

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
	} else if (valeur <= 100) {
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
 * Dessine dans un canvas des "barres" verticales en fonction des différentes valeurs
 * du fichier JSON généré par audiowaveform.
 * @param data tableau contenant des données positives.
 */

/*function drawCanvas(data) {
	let ctx = document.getElementById("canvas").getContext('2d');
	let canvas = document.getElementById("canvas");
	let height = 150;
	let width = window.innerWidth;

	canvas.setAttribute("width", "" + width);
	canvas.setAttribute("height", "" + height);

	for (let i = 0; i < data.length; i++) {
		ctx.strokeStyle = "#C70039";
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo((i * width / data.length) + ctx.lineWidth + 1, height);
		ctx.lineTo((i * width / data.length) + ctx.lineWidth + 1, data[i]);
		ctx.stroke();

		ctx.closePath();
	}
}*/

/**
 * Dessine dans une balise SVG les barres verticales d'une hauteur différente en
 * fonction des différentes valeurs du fichier JSON généré par audiowaveform
 * @param data
 */
function drawSvg(data) {
	let svg = document.getElementById('svg'),
		height = getHeightWaveForm(),
		width = getWidthWaveForm(),
		largeurRect = Math.ceil(getNombreBarresResponsive(window.innerWidth) / 100),
		w3c = "http://www.w3.org/2000/svg";

	//console.log(largeurRect);
	//console.log(data.length);

	let maxHBar = getMax();
	// let nombreDeBarre = getNombreBarresResponsive(window.innerWidth) > 6 ? getNombreBarresResponsive(window.innerWidth) : 5;
	let nombreDeBarre = getNombreBarresResponsive(window.innerWidth);

	for (let i = 0; i < nombreDeBarre; i++) {
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
	//drawCanvas(getData());
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
