function afficheData() {
	var data = document.getElementById('saisie').value;
	postAjax(data, function(json) {
		let newJson = json['_embedded'];

		for (let i = 0; i < newJson.length; i++) {
			console.log(newJson[i]);
		}


	});
}

/**
 * Fonction qui permet de faire un appel AJAX
 *
 * @param value
 * @param callback
 */
function postAjax(value, callback){
	let http = new XMLHttpRequest();

	let data = 'data='+value;

	http.onreadystatechange = function() {
		if (http.readyState === 4 && http.status === 200) {
			let jsonBrut = http.responseText;
			let json = JSON.parse(jsonBrut);
			return callback(json);
		}
	};

	http.open("POST", "model/getData.php", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send(data);
}

document.querySelector('form').onsubmit = function(){
	return false;
}