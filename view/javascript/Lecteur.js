/**
 * Constructeur de l'objet représentant le lecteur
 */
function Lecteur () {
    currentMorceau=null;
    currentTime=null;
    volume=50;
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

Lecteur.prototype.getWidthWaveForm = function() {
    let element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        width = style.getPropertyValue('width');
    
    return parseInt(width);
}

Lecteur.prototype.getHeightWaveForm = function() {
    let element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height');
        
    return parseInt(height);
}

Lecteur.prototype.getMax = function() {
    let tab = getData(),
        max = 0;

    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > max) {
            max = tab[i];
        }
    }

    return max;
}

/**
 * Dessine en SVG les différentes barres verticales.
 * @param {*} values liste des valeurs générées avec AudioWaveForm
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

