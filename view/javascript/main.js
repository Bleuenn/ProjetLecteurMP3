let morceau = new Morceau("Doing Yoga", "Kazy Lambist"),
 	lecteur = new Lecteur(),
	data = morceau.getData();

lecteur.setCurrentMorceau(morceau);
morceau.setValuesWaveform(data);
// morceau.getValuesWaveform(this.currentMorceau.getValuesWaveform()) //
console.log("data: "+ data);
console.log("nblike: "+lecteur.currentMorceau.getNbLike());
console.log("values: "+lecteur.currentMorceau.getValuesWaveform());

lecteur.drawSVG(lecteur.currentMorceau.getValuesWaveform());
window.addEventListener('resize', function () {
	lecteur.resizeBar();
});

lecteur.player(lecteur.currentMorceau.getPath());

lecteur.initialisation();
























