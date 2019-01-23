/**
 * Constructeur de l'objet représentant le lecteur
 * @constructor
 */
function Lecteur () {
    this.currentMorceau=null;
    this.currentTime=null;
    this.volume=25;
    this.audio = null;
    this.listening = false;
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
    this.initialisation();
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
Lecteur.prototype.createSound = function(url, lecteur) {
    soundManager.setup({
        onready: function() {
            lecteur.audio = soundManager.createSound({
                id: 'audio',
                url: url,
                whileplaying: function() {
                    // player.timeElapsed.textContent = this.formatMilliseconds(audio.position);
                    var currentTime = document.querySelector('div[class=en-cours]');
                    // currentTime.innerHTML = formatMillisecondes(audio.duration);
                    currentTime.innerText = lecteur.currentMorceau.formatMillisecondes(lecteur.audio.position);
                },
                onfinish: function() {
                    var boutonLecteur = document.getElementsByClassName('play')[0];
                    currentTime.innerText = "0:00";
                    boutonLecteur.innerText = "";

                    // var event;
                    // try {
                    // 	// Internet Explorer doesn't like this statement
                    // 	event = new Event('click');
                    // } catch (ex) {
                    // 	event = document.createEvent('MouseEvent');
                    // 	event.initEvent('click', true, false);
                    // }
                    // player.btnStop.dispatchEvent(event);
                }
            });
        }
    });
	return lecteur.audio;
}

/**
 * Récupère la largeur (en pixel) de la div qui contient l'onde générée par audiowaveform
 * @return {number} la largeur en pixel de la div .waveform
 */
Lecteur.prototype.getWidthWaveForm = function() {
    var element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        width = style.getPropertyValue('width');

    return parseInt(width);
}

/**
 * Récupère la hauteur (en pixel) de la div qui contient l'onde générée par audiowaveform
 * @returns {number} la hauteur en pixel de la div .waveform
 */
Lecteur.prototype.getHeightWaveForm = function() {
    var element = document.getElementsByClassName('waveform')[0],
        style = window.getComputedStyle(element),
        height = style.getPropertyValue('height');

    return parseInt(height);
}

/**
 * Retourne la valeur maximale entre toutes les données récupérées du fichier JSON générée par Audiowaveform
 * @returns {number} valeur maximale du JSON
 */
Lecteur.prototype.getMax = function() {
	var tab = this.currentMorceau.getValuesWaveform();
	var max = 0;

	for (var i = 1; i < tab.length; i++) {
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
function devareOdd(data) {
	//console.log(data.length);
	var tableau = [];
	for (var i = 1; i < data.length - 1; i = i + 2) {
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
    var svg = document.getElementById('svg'),
		height = this.getHeightWaveForm(),
		width = this.getWidthWaveForm(),
		largeurRect = 3//Math.floor(this.getNombreBarresResponsive(window.innerWidth) / 100 + 1),
		w3c = "http://www.w3.org/2000/svg";

	var maxHBar = this.getMax();
	var espaceMaxParBarre = width / values.length;
	var espaceEntreLesBarres = espaceMaxParBarre - largeurRect;

	for (var i = 0; i < values.length; i++) {
		var rect = document.createElementNS(w3c, 'rect'),
			reverse = document.createElementNS(w3c, 'rect'),
			value = ((this.getHeightWaveForm() * values[i]) / maxHBar) * 0.66,
			horizon = (height * 2) / 3; // permet de remonter les barres pour insérer l'effet mirroir en dessous

		if (value === 0) {
			value = 6;
		}

		// Création des barres SVG verticales
		rect.setAttributeNS(null, "x", i*espaceMaxParBarre);
		rect.setAttributeNS(null, "y", horizon - value);
		rect.setAttributeNS(null, "width", largeurRect);
		rect.setAttributeNS(null, "height", value);
		rect.setAttributeNS(null, "data-num", i);

		// Création de l'effet mirroir
		reverse.setAttributeNS(null, "class", "reverse");
		reverse.setAttributeNS(null, "x", i * espaceMaxParBarre);
		reverse.setAttributeNS(null, "y", horizon + 3);
		reverse.setAttributeNS(null, "width", largeurRect);
		reverse.setAttributeNS(null, "height", value / 2);
		reverse.setAttributeNS(null, "data-num", i);

		svg.appendChild(rect);
		svg.appendChild(reverse);
    }
}

/**
 * Efface les différents SVG présent sur le lecteur et redessine l'onde audiowaveform
 */
Lecteur.prototype.resizeBar = function() {
	var svg = document.getElementById('svg');
	svg.innerHTML ="";
	this.drawSVG(this.currentMorceau.getValuesWaveform());
  this.colorSvg();
}

/**
 * Cette fonction permet de calculer le nombre de barre que doit posséder le SVG
 * en fonction de la largeur de la fenêtre
 * @returns nombreBarre le nombre de barre en fonction de la largeur de l'écran
 */
Lecteur.prototype.getNombreBarresResponsive = function(largeurEcran) {
	var nombreDeBarres = largeurEcran / 7; // divisé par 7 pour avoir un ratio pour un juste milieu entre trop et pas assez de barres
	return Math.round(nombreDeBarres);
}

/**
 * Joue la musique musique en paramètre.
 * @param chemin chemin de la musique.
 */
Lecteur.prototype.play = function(chemin) {
    console.log(this.audio);
    if(this.audio !== null){
        this.audio.pause();
        this.audio.stop();
        this.audio.unload();
        this.listening = false;
        this.audio.destruct();
        this.audio = null;
    }

    this.audio = this.createSound(chemin, this);
    this.audio.load();

    let boutonLecteur = document.getElementsByClassName('play')[0];
    boutonLecteur.addEventListener('click', function () {

        if (!this.listening) {
            this.audio.play();
            this.listening = true;
            boutonLecteur.innerText = "";
        } else {
            this.audio.pause();
            this.listening = false;
            boutonLecteur.innerText = "";
        }

        this.currentMorceau.addOnePlay();
        var nbLecture = document.getElementsByClassName("nb-lectures")[0];
        nbLecture.innerText = this.getCurrentMorceau().nbPlay;
    }.bind(this));
};

/**
 * Affiche ou masque les boutons
 * previous et next du player
 */
Lecteur.prototype.showNavigationButton = function(boolean){

    var prev = document.getElementsByClassName("prev")[0];
    var next = document.getElementsByClassName("next")[0];

    if(boolean){
        prev.style.display = 'block';
        next.style.display = 'block';
    }
    else{
        prev.style.display = 'none';
        next.style.display = 'none';
    }
}

/**
 * Permet de faire l'initialisation des éléments du lecteur
 */
Lecteur.prototype.initialisation = function() {
	//Initialisation Cover
    var cover = document.getElementsByClassName('visuel')[0];
    var image = document.createElement("img");
    image.setAttribute("src", this.getCurrentMorceau().cover);
    while (cover.firstChild) {
        cover.removeChild(cover.firstChild);
    }
    cover.appendChild(image);

	//Initialisation Infos
    var artiste = document.getElementsByClassName('artiste')[0];
    var titre = document.getElementsByClassName('titre')[0];

    artiste.innerText = this.getCurrentMorceau().artiste;
    titre.innerText = this.getCurrentMorceau().name;

    //Initialisation Temps
    var totalTime = document.getElementsByClassName('total')[0];
    var minutes = Math.floor(this.getCurrentMorceau().totalTime / 60);
    var seconds = this.getCurrentMorceau().totalTime - minutes * 60;

    totalTime.innerText = minutes+":"+seconds;

    //Initialisation statistiques
    var nbLecture = document.getElementsByClassName("nb-lectures")[0];
    var nbCommentaire = document.getElementsByClassName("nb-commentaires")[0];

    nbLecture.innerText = this.getCurrentMorceau().nbPlay;
    nbCommentaire.innerText = this.getCurrentMorceau().nbComment;

    //Initialisation social
    var like = document.getElementsByClassName("like")[0];
    var share = document.getElementsByClassName("share")[0];

    like.innerText = this.getCurrentMorceau().nbLike;
    share.innerText = this.getCurrentMorceau().nbPartage;

    this.currentMorceau.setValuesWaveform( this.currentMorceau.getValuesWaveform() );
    // morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform()) //
    // console.log("data: "+ lecteur.currentMorceau.getValuesWaveform() );
    // console.log("nblike: "+lecteur.currentMorceau.getNbLike());
    // console.log("values: "+lecteur.currentMorceau.getValuesWaveform());

    this.drawSVG(this.currentMorceau.getValuesWaveform());
    this.resizeBar();

    var btnVolume = document.getElementsByClassName('volume')[0];

	btnVolume.addEventListener('mouseover', function (e){
        var range = document.getElementById("range");

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

            var btnVolume = document.getElementsByClassName('volume')[0];
            if (range.value <= 2) { btnVolume.innerText = "";}
            else if (range.value <= 33) { btnVolume.innerText = "";}
            else if (range.value <= 66) { btnVolume.innerText = ""; }
            else if (range.value <= 100) { btnVolume.innerText = "";}

            range.style.display = "none";
        }, true);

    }, true);

    like.addEventListener("click", function(e){
        this.currentMorceau.addOneLike();
        var like = document.getElementsByClassName("like")[0];
        like.innerText = this.getCurrentMorceau().nbLike;
    }.bind( this ), true);

    share.addEventListener("click", function(e){
        this.currentMorceau.addOnePartage();
        var share = document.getElementsByClassName("share")[0];
        share.innerText = this.getCurrentMorceau().nbPartage;
    }.bind( this ), true);

    /**************SOUNDMANAGER2************/
    let boutonLecteur = document.getElementsByClassName('play')[0];

    boutonLecteur.addEventListener('click', function () {

        if (!this.listening) {
            this.audio.play();
            this.listening = true;
            boutonLecteur.innerText = "";
        } else {
            this.audio.pause();
            this.listening = false;
            boutonLecteur.innerText = "";
        }

        this.currentMorceau.addOnePlay();
        var nbLecture = document.getElementsByClassName("nb-lectures")[0];
        nbLecture.innerText = this.getCurrentMorceau().nbPlay;
    }.bind(this));
    /*************************************/

    this.colorSvg();
};

/**
 * Permet de colorer la waveform lors d'un clic sur l'un des rectangles de l'audiowaveform
 */
Lecteur.prototype.colorSvg = function(){
	var nRect = document.querySelectorAll("rect");

		for(var i = 0; i < nRect.length; i++){

			nRect[i].addEventListener('click',function(e){
			var rectClick = e.currentTarget;

				if(!(rectClick.classList.contains("reverse"))){

					rectClick.nextElementSibling.classList.replace("reverse","activeR");
					rectClick.classList.add("active");
					var currentRect = rectClick ;

					while(currentRect.previousElementSibling ){
						var prev = currentRect.previousElementSibling;
						prev.classList.replace("reverse","activeR"); //barre reverse
						prev.previousElementSibling.classList.add("active"); // barre du haut
						currentRect = prev.previousElementSibling;
					}

					if(rectClick.classList.contains("active")){
						var firstNextRect = rectClick.nextElementSibling.nextElementSibling
						firstNextRect.classList.remove("active");
						var secondNextRect = firstNextRect.nextElementSibling;
						secondNextRect.classList.replace("activeR","reverse");
						var newcurrentRect = secondNextRect;

						while(newcurrentRect.nextElementSibling) {
							var next = newcurrentRect.nextElementSibling;
							next.classList.remove("active");
							next.nextElementSibling.classList.replace("activeR", "reverse");
							newcurrentRect = next.nextElementSibling;
						}
					}
				}
			});
		}
}

// /**
//  * Permet de renvoyer un tableau contenant une partie des batons en fonction de la largeur de l'écran
//  * @param mesBatons tableau contenant les valeurs générées par audiowaveform
//  */
Lecteur.prototype.bonNombreBaton = function(mesBatons) {
	var newTab = [];
	var largeurEcran = this.getWidthWaveForm();

	if (largeurEcran < 1000) {

	}
}

