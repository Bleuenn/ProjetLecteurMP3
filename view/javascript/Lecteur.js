/**
 * Constructeur de l'objet représentant le lecteur
 * @constructor
 */
function Lecteur () {
    this.currentMorceau=null;
    this.currentTime=null;
    this.audio = null;
    this.setVolume(15);
    this.listening = false;
    // playList=false; // a voir si on l'intègre...
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
    var btnVolume = document.getElementsByClassName('volume')[0];
    this.volume=newVolume;
    if(this.audio !== null){
        this.audio.setVolume(newVolume);
    }
    if (newVolume <= 2) { btnVolume.innerText = "";}
    else if (newVolume <= 33) { btnVolume.innerText = "";}
    else if (newVolume <= 66) { btnVolume.innerText = ""; }
    else if (newVolume <= 100) { btnVolume.innerText = "";}
};

/**
 * Met la musique en pause
 */
Lecteur.prototype.pause = function(){
    var play = document.querySelector('.play');
    this.audio.pause();
    this.listening = false;
    play.innerText = "";
}

/**
 * Relance la musique
 */
Lecteur.prototype.play = function(){
    var boutonLecteur = document.getElementsByClassName('play')[0];
    this.audio.play();
    this.listening = true;
    boutonLecteur.innerText = "";
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
				volume: lecteur.volume,
                whileplaying: function() {
					// Pendant la lecture, on met à jour le temps courant de la musique.
                    var currentTime = document.querySelector('div[class=en-cours]');
                    currentTime.innerText = lecteur.currentMorceau.formatMillisecondes(lecteur.audio.position);

					// Permet de récupérer tous les barres et de définir quelle barre est associée au temps courant.
					var allRect = document.querySelectorAll("rect");
					var curseur = allRect[Math.ceil(lecteur.audio.position / (lecteur.audio.duration / allRect.length))];

					// J'attribue les couleurs pour la barre courante 'reverse' puis sur l'élément le précèdent
					while(curseur !== null) {
						if (curseur === undefined) {
							curseur = allRect[allRect.length-1]; // si undefined on place le curseur à la fin
						}
							if (curseur.classList.value === "reverse" ) {
								curseur.classList.replace('reverse','activeR');
								curseur.previousElementSibling.classList.add('active');
							}
								curseur = curseur.previousElementSibling;
					}
                },
                onfinish: function() {
                    //fonction appelée à la fin de la musique.
                    lecteur.pause();
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
		largeurRect = 3,//Math.floor(this.getNombreBarresResponsive(window.innerWidth) / 100 + 1),
		w3c = "http://www.w3.org/2000/svg";

	var maxHBar = this.getMax();
	var espaceMaxParBarre = width / values.length;

	for (var i = 0; i < values.length; i++) {
		var rect = document.createElementNS(w3c, 'rect'),
			reverse = document.createElementNS(w3c, 'rect'),
			value = ((this.getHeightWaveForm() * values[i]) / maxHBar) * 0.66,
			horizon = (height * 2) / 3; // permet de remonter les barres pour insérer l'effet mirroir en dessous

		if (value < 1) {
			value = 1;
		}

		// Création des barres SVG verticales
		rect.setAttributeNS(null, "x", i*espaceMaxParBarre);
		rect.setAttributeNS(null, "y", horizon - value);
		rect.setAttributeNS(null, "width", largeurRect);
		rect.setAttributeNS(null, "height", value);
		rect.setAttributeNS(null, "data-num", i);
		rect.style.stroke = "transparent";
		rect.style.strokeWidth = 5;

		// Création de l'effet mirroir
		reverse.setAttributeNS(null, "class", "reverse");
		reverse.setAttributeNS(null, "x", i * espaceMaxParBarre);
		reverse.setAttributeNS(null, "y", horizon + 3);
		reverse.setAttributeNS(null, "width", largeurRect);
		reverse.setAttributeNS(null, "height", value / 2);
		reverse.setAttributeNS(null, "data-num", i);
		rect.style.stroke = "transparent";
		rect.style.strokeWidth = 5;

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
	this.drawSVG(this.getNombreBarresResponsive());
  this.colorSvg();
  this.newCurrentTime();
}

/**
 * Joue la musique musique en paramètre.
 * @param chemin chemin de la musique.
 */
Lecteur.prototype.player = function(chemin) {
    console.log(this.audio);
    if(this.audio !== null){
        this.pause();
        this.audio.stop();
        this.audio.unload();
        this.listening = false;
        this.audio.destruct();
        this.audio = null;
    }

    this.audio = this.createSound(chemin, this);
    this.audio.load();

    var boutonLecteur = document.getElementsByClassName('play')[0];
    boutonLecteur.addEventListener('click', function () {

        if (!this.listening) {
            this.play();
        } else {
            this.pause();
		}
			this.currentMorceau.addOnePlay();
        var nbLecture = document.getElementsByClassName("nb-lectures")[0];
        nbLecture.innerText = this.getCurrentMorceau().nbPlay;
    }.bind(this),true);
};



/**
 * Cette fonction permet de calculer le nombre de barre que doit posséder le SVG
 * en fonction de la largeur de la fenêtre
 * @returns finalTab le nouveau tableau de valeur pour les barres à afficher
 */
Lecteur.prototype.getNombreBarresResponsive = function() {
  var oTab = this.currentMorceau.getValuesWaveform(); // the tab stored in the database
  var oNbBar = 400; //number of value in the tab stored in the database
  var barSize = 7; //in pixel
  var finalTab = []; //the tab that contains the value displayed on the screen

  var waveformWidth = this.getWidthWaveForm(); //the width of the waveform
  var nbBar = parseInt(waveformWidth / barSize); //the number of bar that are going to be displayed

  var nbValuePerBar = oNbBar / nbBar; //the number of value required to math the number of one new value
  nbValuePerBar = nbValuePerBar.toFixed(4); //Do a round on the value at 4 number after the point

  //Check if the round don't make the application go over the length of the original Tab and if does
  // reduce the value by 0.0001
  if (nbValuePerBar * nbBar > 400) {
    nbValuePerBar = nbValuePerBar - 0.0001;
  }

  var intPartVPB = parseInt(nbValuePerBar);
  var restVPB = nbValuePerBar - intPartVPB;
  restVPB = parseFloat(restVPB).toFixed(4);
  var restBisVPB = 0;
  var oTabCursor = 0;
  var iValue = 0;

  //Lighter treatment when the case doesn't need to treat with rests to remain precise
  if (nbValuePerBar >= 1) {
    if (restVPB == 0) {
      for (var i = 0; i < nbBar; i++) {
        iValue = 0;
        for (var y = 0; y < nbValuePerBar; y++) {
          iValue += oTab[oTabCursor];
          oTabCursor++;
        }
        finalTab[i] = iValue / nbValuePerBar;
      }
//Heavier process processing using the rests
    } else {
      for (var i = 0; i < nbBar; i++) {
        iValue = 0;
        if (restBisVPB != 0) {
          iValue += oTab[oTabCursor] * parseFloat(restBisVPB).toFixed(4);
          intPartVPB = parseInt(nbValuePerBar - parseFloat(restBisVPB).toFixed(4));
          restVPB = (nbValuePerBar - parseFloat(restBisVPB).toFixed(4)) - intPartVPB;
          restVPB = parseFloat(restVPB).toFixed(4);
          oTabCursor++;
        }
        for (var y = 0; y < intPartVPB; y++) {
          iValue += oTab[oTabCursor];
          oTabCursor++;
        }
        iValue += oTab[oTabCursor] * parseFloat(restVPB).toFixed(4);
        restBisVPB = 1 - (parseFloat(restVPB).toFixed(4));
        restBisVPB = parseFloat(restBisVPB).toFixed(4);

        iValue = iValue / nbValuePerBar;
        finalTab[i] = parseFloat(iValue.toFixed(4));
      }
    }
  //When the number of bar required to fill the page if superior to the number of data stored in the database
  } else {
    finalTab = oTab; //The curve is displayed is made with the same data as the one stored in base
  }
  return finalTab;
}

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
    // console.log("Time :"+this.getCurrentMorceau().totalTime);
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
    share.innerText = "partager";

    this.currentMorceau.setValuesWaveform( this.currentMorceau.getValuesWaveform() );
    // morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform()) //
    // console.log("data: "+ lecteur.currentMorceau.getValuesWaveform() );
    // console.log("nblike: "+lecteur.currentMorceau.getNbLike());
    // console.log("values: "+lecteur.currentMorceau.getValuesWaveform());

    this.drawSVG(this.getNombreBarresResponsive());
    this.resizeBar();

    var btnVolume = document.getElementsByClassName('volume')[0];

	btnVolume.addEventListener('mouseover', function (e){
        var range = document.getElementById("range");
        if( range === null){
            range = document.createElement("input");
            range.setAttribute("type", "range");
            range.setAttribute("id", "range");
            // range.setAttribute('min',0);
            // range.setAttribute('max',100);
            // range.setAttribute('step',1);
            range.setAttribute("value", 10);
            btnVolume.parentNode.appendChild(range);
        }
        else{
            range.style.display = "block";
        }

        range.addEventListener("mouseout", function (e) {
            range.style.display = "none";
        }, true);

        range.addEventListener('change', function(e) {
            range.style.display = "none";
            this.setVolume(range.value);
		}.bind(this), true);

    }.bind(this), true);

    like.addEventListener("click", function(e){
        this.currentMorceau.addOneLike();
        var like = document.getElementsByClassName("like")[0];
        like.innerText = this.getCurrentMorceau().nbLike;
    }.bind( this ), true);

    share.addEventListener("click", function(e){
        this.currentMorceau.addOnePartage();
        var share = document.getElementsByClassName("share")[0];
        var shareDiv = document.querySelector("#share-code");

        if(shareDiv === null){
            shareDiv = document.createElement("div");
            var shareInput = document.createElement("input");
            var shareBtn = document.createElement("button");

            //Génération du lien de l'iframe
            var sharelink = window.location.href;

            shareDiv.setAttribute("id", "share-code");
            shareInput.setAttribute("id", "share-input");
            shareBtn.setAttribute("id", "share-btn");
            shareInput.setAttribute("value", '<iframe src="'+sharelink+'" width="100%" height="280px" sandbox="allow-scripts"><p><a href="https://developer.mozilla.org/fr/docs/Web/JavaScript/"></a></p></iframe>');

            shareDiv.appendChild(shareBtn);
            shareDiv.appendChild(shareInput);
            share.parentNode.appendChild(shareDiv);

            shareBtn.addEventListener("click", function(e){
                shareInput.select();
                shareInput.focus();
                document.execCommand("copy");
            });

        }
        else{
            share.parentNode.removeChild(shareDiv);
            shareDiv = null;
        }

    }.bind( this ), true);

    /**************SOUNDMANAGER2************/
    var boutonLecteur = document.getElementsByClassName('play')[0];

    boutonLecteur.addEventListener('click', function () {

        if (!this.listening) {
            this.play();
        } else {
            this.pause();
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

	for(var i = 0; i < nRect.length; i++) {

		//action si clic de la souris sur les barres du haut et quand elles ne sont pas "active"
		nRect[i].addEventListener('click',function(e){
			var rectClick = e.currentTarget;

			if(!(rectClick.classList.contains("reverse"))){
				rectClick.nextElementSibling.classList.replace("reverse","activeR");//barre reverse
				rectClick.classList.add("active");// barre du haut
				var currentRect = rectClick ;

				while(currentRect.previousElementSibling ){
					var prev = currentRect.previousElementSibling;
					prev.classList.replace("reverse","activeR");
					prev.previousElementSibling.classList.add("active");
					currentRect = prev.previousElementSibling;
				}

				if(rectClick.classList.contains("active") || rectClick.classList.contains("hover")){
					var firstNextRect = rectClick.nextElementSibling.nextElementSibling ;
					firstNextRect.classList.remove("active");
					firstNextRect.classList.remove("hover");
					var secondNextRect = firstNextRect.nextElementSibling;
					secondNextRect.classList.replace("activeR","reverse");
					var newcurrentRect = secondNextRect;

					while(newcurrentRect.nextElementSibling) {
						var next = newcurrentRect.nextElementSibling;
						next.classList.remove("active");
						next.classList.remove("hover");
						next.nextElementSibling.classList.replace("activeR", "reverse");
						newcurrentRect = next.nextElementSibling;
					}
				}
			}
		});

		//action si la souris passe par-dessus les barres du haut
		nRect[i].addEventListener('mouseover',function(e) {
			var rectHover = e.currentTarget;
			//action quand les barres ne sont pas activent (elles sont grises)
			if(!(rectHover.classList.contains("reverse")) && !(rectHover.classList.contains("active")) && !(rectHover.classList.contains("activeR"))){
				var nextHover = rectHover;
				while(nextHover != null && !nextHover.classList.contains("active")){
					nextHover.classList.add("hover");
					if(nextHover.previousElementSibling == null){
						nextHover = null;
					} else {
						nextHover = nextHover.previousElementSibling.previousElementSibling;
					}
				}
			//action quand les barres sont activent (elles sont oranges)
			} else if (rectHover.classList.contains("active")) {
				var nextHover = rectHover;
				while(nextHover != null && nextHover.classList.contains("active")){
					nextHover.classList.add("hover");
					if(nextHover.nextElementSibling == null){
						nextHover = null;
					} else {
						nextHover = nextHover.nextElementSibling.nextElementSibling;
					}
				}
			}
		});
		//action si la souris ne passe plus par dessus les barres du haut après y être passé
		nRect[i].addEventListener('mouseout',function(e){
			var rectHover = e.currentTarget;
			//si la souris est passé par-dessus des barres qui n'étaient pas activent
			if(rectHover.classList.contains("hover")){
				var nextHover = rectHover;
				while(nextHover != null){
					nextHover.classList.remove("hover");
					if(nextHover.previousElementSibling == null){
						nextHover = null;
					}else{
						nextHover = nextHover.previousElementSibling.previousElementSibling;
					}

				}
			//si la souris est passé par-dessus des barres étaient activent	
			} else if (rectHover.classList.contains("active")) {
				var nextHover = rectHover;
				while(nextHover != null) {
					nextHover.classList.remove("hover");
					if(nextHover.nextElementSibling == null){
						nextHover = null;
					} else {
						nextHover = nextHover.nextElementSibling.nextElementSibling;
					}
				}
			}
  		});
	}
}

/**
 * Permet de déplacer la musique à l'endroit cliqué sur l'onde
 * @param e baton sur lequel le clic a été déclenché
 */
Lecteur.prototype.setPosition = function(e) {
    var rect = document.querySelectorAll('rect'); // tableau contenant toutes les barres
    var targetNumber = parseInt(e.getAttribute('data-num')); // je récupère le numéro de la barre cliquée
    var newPosition = ((targetNumber / rect.length) * this.audio.duration)*2; // calcule de la nouvelle position
    this.audio.setPosition(newPosition); // affectation de la nouvelle position

}

/**
 * Permet d'ajouter l'évènement au clic sur chaque rectangle représenté sur l'audiowaveform.
 */
Lecteur.prototype.newCurrentTime = function () {
    var rect = document.querySelectorAll('rect');
    for (var i = 0; i < rect.length; i++) {
        rect[i].addEventListener(('click'), function (e) {
            this.setPosition(e.currentTarget);
        }.bind( this ), true);
    }
}
