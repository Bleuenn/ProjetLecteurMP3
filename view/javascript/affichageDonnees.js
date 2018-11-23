function afficheData() {
    let data = document.getElementById('saisie').value;
    postAjax(data, function (json) {
        let body = document.getElementById('bodyTableau');
        for (let i = 0; i < json.length; i++) {
            let title = json[i].titre,
                artiste = json[i].artiste.nom,
                annee = json[i].annee,
                nbLike = json[i].nbLike,
                chemin = json[i].cheminMP3;

            let tr = document.createElement('tr'),
                tdTitle = document.createElement('td'),
                tdArtiste = document.createElement('td'),
                tdAnnee = document.createElement('td'),
                tdLike = document.createElement('td'),
                tdChemin = document.createElement('td');

            tdTitle.innerText = title;
            tdArtiste.innerText = artiste;
            tdAnnee.innerText = annee;
            tdLike.innerText = nbLike;
            tdChemin.innerText = chemin;

            if (tdTitle !== null) tr.appendChild(tdTitle);
            if (tdArtiste !== null) tr.appendChild(tdArtiste);
            if (tdAnnee !== null) tr.appendChild(tdAnnee);
            if (tdLike !== null) tr.appendChild(tdLike);
            if (tdChemin !== null) tr.appendChild(tdChemin);

            if (tr.innerText !== "") body.appendChild(tr);
        }

        let p = document.getElementById('affichage');
        p.innerText = JSON.stringify(json);
    });
}

/**
 * Fonction qui permet de faire un appel AJAX
 *
 * @param value
 * @param callback
 */
function postAjax(value, callback) {
    let http = new XMLHttpRequest();
    let data = 'data=' + value;

    http.onreadystatechange = function () {
        if (http.readyState === 4 && http.status === 200) {
            let jsonBrut = http.responseText;
            let json = JSON.parse(jsonBrut);
            let newJson = json['_embedded'];
            return callback(newJson);
        }
    };

    http.open("POST", "model/getData.php", true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.send(data);
}

document.querySelector('form').onsubmit = function () {
    return false;
}