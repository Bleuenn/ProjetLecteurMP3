<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Lecteur mp3</title>
    <link rel="stylesheet" type="text/css" href="view/css/style.css"/>
</head>
<body>
<div class='audioplayer'>
    <div class='visuel'></div>
    <div class='infos'>
        <div class='artiste'></div>
        <div class='titre'></div>
    </div>
    <div class="waveform">
        <svg xmlns="http://www.w3.org/2000/svg" id="svg"/>
    </div>
    <div class='controls'>
        <button class='prev'></button>
        <button class='play-pause play'></button>
        <button class='next'></button>
        <button class='volume' data-vaue='90'></button>
    </div>
    <div class='temps'>
        <div class='en-cours'>0:00</div>
        <div class='total'></div>
    </div>
    <div class='statistiques'>
        <div class='nb-lectures'></div>
        <div class='nb-commentaires'></div>
    </div>
    <div class='social'>
        <button class='like'></button>
        <button class='share'></button>
    </div>
</div>
<script src="view/javascript/soundmanager2/soundmanager2-nodebug-jsmin.js"></script>
<script src="view/javascript/Morceau.js"></script>
<script src="view/javascript/FileEcoute.js"></script>
<script src="view/javascript/Lecteur.js"></script>
<script src="view/javascript/main.js"></script>
</body>


