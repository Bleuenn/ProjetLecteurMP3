var req = new XMLHttpRequest();
var reqFileEcoute = new XMLHttpRequest();
let id = window.location.search.toString().substr(4);

/* Pour les tests, on peut avoir chacun son id de test ça sera plus simple pour switch entre nos différentes configs */
//let id = '5c37b38d214fb37593d7c3af'; // mongoDB Melvin
//let id = '5c4207d20a00ccd7d6d2cac6' // mongoDB Thomas S
/********************************************************************************************************************/

// Requête Ajax pour récupérer une musique de la bdd
req.open('GET', 'http://'+window.location.host+'/ProjetLecteurMP3/index.php?page=admin&id='+id+'&json=true', true); // true pour asynchrone

req.onreadystatechange = function (e) {
    if (req.readyState == 4) {
        // Cas ou la requête à reussi
        if (req.status == 200){

            let json = JSON.parse(req.responseText);
            let morceau = new Morceau(json._id.$oid, json.titre, json.album, json.artiste, json.cover, json.nbLike,
                            json.nbPartage, json.duree, json.nbEcoute, json.nbComment, json.listePoint, json.cheminMP3),
            lecteur = new Lecteur();

            //console.log(morceau);
            lecteur.showNavigationButton(false);
            lecteur.setCurrentMorceau(morceau);

            window.addEventListener('resize', function () {
                lecteur.resizeBar();
            });

            // lecteur.player(lecteur.currentMorceau.getPath());
            lecteur.audio = lecteur.createSound(lecteur.currentMorceau.getPath(), lecteur);

            // Requête Ajax pour récupérer toutes les musiques de la bdd
            reqFileEcoute.open('GET', 'http://'+window.location.host+'/ProjetLecteurMP3/index.php?page=admin&json=true', true); // true pour asynchrone

            reqFileEcoute.onreadystatechange = function (e) {

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

                        if(listeMorceau.length > 1){
                            lecteur.showNavigationButton(true);
                        }

                        var fileEcoute = new FileEcoute("file", listeMorceau, lecteur.getCurrentMorceau());

                        var next = document.getElementsByClassName("next")[0];
                        var previous = document.getElementsByClassName("prev")[0];

                        next.addEventListener("click", function(e){
                            lecteur.setCurrentMorceau( fileEcoute.nextMorceau() );
                            lecteur.play( lecteur.currentMorceau.getPath() );
                        }.bind( fileEcoute ), true);
                        previous.addEventListener("click", function(e){
                            lecteur.setCurrentMorceau( fileEcoute.previousMorceau() );
                        }.bind( fileEcoute ), true);
                    }
                    // Cas ou la requête à échoué
                    else console.log("Erreur pendant le chargement de la page.\n");
                }

            };
            reqFileEcoute.send(null);

        }
        // Cas ou la requête à échoué
        else console.log("Erreur pendant le chargement de la page.\n");
    }
};
req.send(null);

function setCookie(sName, sValue) {
    var today = new Date(), expires = new Date();
    expires.setTime(today.getTime() + (365*24*60*60*1000));
    document.cookie = sName + "=" + encodeURIComponent(sValue) + ";expires=" + expires.toGMTString();
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





















