var req = new XMLHttpRequest();
var reqFileEcoute = new XMLHttpRequest();
let id = window.location.search.toString().substr(4);

/* Pour les tests, on peut avoir chacun son id de test ça sera plus simple pour switch entre nos différentes configs */
//let id = '5c37b38d214fb37593d7c3af'; // mongoDB Melvin
//let id = '5c4207d20a00ccd7d6d2cac6' // mongoDB Thomas S
/********************************************************************************************************************/

// Requête Ajax pour récupérer une musique de la bdd
req.open('GET', 'http://localhost/ProjetLecteurMP3/index.php?page=admin&id='+id+'&json=true', true); // true pour asynchrone

req.onreadystatechange = function (e, callback) {
    if (req.readyState == 4) {
        // Cas ou la requête à reussi
        if (req.status == 200){

            let json = JSON.parse(req.responseText);
            let morceau = new Morceau(json._id.$oid, json.titre, json.album, json.artiste, json.cover, json.nbLike,
                            json.nbPartage, json.duree, json.nbEcoute, json.nbComment, json.listePoint, json.cheminMP3),
            lecteur = new Lecteur();

            //console.log(morceau);
            lecteur.setCurrentMorceau(morceau);
            morceau.setValuesWaveform( lecteur.currentMorceau.getValuesWaveform() );
            // morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform()) //
            // console.log("data: "+ lecteur.currentMorceau.getValuesWaveform() );
            // console.log("nblike: "+lecteur.currentMorceau.getNbLike());
            // console.log("values: "+lecteur.currentMorceau.getValuesWaveform());

            lecteur.drawSVG(lecteur.currentMorceau.getValuesWaveform());
            window.addEventListener('resize', function () {
                lecteur.resizeBar();
            });

            lecteur.player(lecteur.currentMorceau.getPath());

            lecteur.initialisation();

			/**************SOUNDMANAGER2************/
			var audio = lecteur.createSound(lecteur.currentMorceau.getPath());

			let boutonLecteur = document.getElementsByClassName('play')[0];
			let enLecture = false;

			boutonLecteur.addEventListener('click', function () {

				if (!enLecture) {
					audio.play();
					enLecture = true;
					boutonLecteur.innerText = "";
				} else {
					audio.pause();
					enLecture = false;
					boutonLecteur.innerText = "";
				}
			});
			/**************************************/
        }
        // Cas ou la requête à échoué
        else console.log("Erreur pendant le chargement de la page.\n");
    }
};
req.send(null);

// Requête Ajax pour récupérer toutes les musiques de la bdd
reqFileEcoute.open('GET', 'http://localhost/ProjetLecteurMP3/index.php?page=admin&json=true', true); // true pour asynchrone

var ajaxFileEcoute = reqFileEcoute.onreadystatechange = function (e) {

    if (reqFileEcoute.readyState == 4) {
        // Cas ou la requête à reussi
        if (reqFileEcoute.status == 200){

            var listeMorceau = [];
            let json = JSON.parse(reqFileEcoute.responseText);
            json = json._embedded;

            /**
             * Boucle pour parcourir le résultat de la requête AJAX
             * Afin de récupere les Morceaux et les inserer dans
             *  un tableau.
             */
            for(let i =0; i < json.length; i++){
                listeMorceau.push( new Morceau(json[i]._id.$oid, json[i].titre, json[i].album, json[i].artiste, json[i].cover, json[i].nbLike,
                    json[i].nbPartage, json[i].duree, json[i].nbEcoute, json[i].nbComment, json[i].listePoint, json[i].cheminMP3) );
            }

            var fileEcoute = new FileEcoute("file", listeMorceau);
            console.log(fileEcoute);
        }
        // Cas ou la requête à échoué
        else console.log("Erreur pendant le chargement de la page.\n");
    }

};
reqFileEcoute.send(null);























