var req = new XMLHttpRequest();

/* Pour les tests, on peut avoir chacun son id de test ça sera plus simple pour switch entre nos différentes configs */
// let id = '5c37b38d214fb37593d7c3af'; // mongoDB Melvin
let id = '5c4207d20a00ccd7d6d2cac6' // mongoDB Thomas S
/********************************************************************************************************************/

req.open('GET', 'http://localhost/ProjetLecteurMP3/index.php?page=admin&id='+id+'&json=true', true); // true pour asynchrone

req.onreadystatechange = function (e) {
    if (req.readyState == 4) {
        if (req.status == 200){

            let json = JSON.parse(req.responseText);
            console.log(json);
            console.log(json._id.$oid);
            let morceau = new Morceau(json._id.$oid, json.titre, json.album, json.artiste, json.cover, 0, 0, json.duree, 0, 0, json.listePoint, json.cheminMP3),
                lecteur = new Lecteur();

            lecteur.setCurrentMorceau(morceau);
            morceau.setValuesWaveform( lecteur.currentMorceau.getValuesWaveform() );
            // morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform()) //
            console.log("data: "+ lecteur.currentMorceau.getValuesWaveform() );
            console.log("nblike: "+lecteur.currentMorceau.getNbLike());
            console.log("values: "+lecteur.currentMorceau.getValuesWaveform());

            lecteur.drawSVG(lecteur.currentMorceau.getValuesWaveform());
            window.addEventListener('resize', function () {
                lecteur.resizeBar();
            });

            lecteur.player(lecteur.currentMorceau.getPath());

            lecteur.initialisation();

        }
        else console.log("Erreur pendant le chargement de la page.\n");
    }
};

req.send(null);
























