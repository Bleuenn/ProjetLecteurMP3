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
