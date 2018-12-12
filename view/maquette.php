<?php
/**
 * Created by PhpStorm.
 * User: Leveque_m
 * Date: 16/11/18
 * Time: 16:32
 */
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Lecteur mp3</title>
    <link rel="stylesheet" type="text/css" href="view/css/style.css"/>
</head>
<body>
    <div class='audioplayer'>
        <div class='visuel'></div>
        <div class='infos'>
            <div class='artiste'>Nom de l'artiste</div>
            <div class='titre'>Nom du morceau</div>
        </div>
        <div class="waveform">
            <svg xmlns="http://www.w3.org/2000/svg" id="svg"/>
            <!-- viewBox="0 0 250 1000"
                 preserveAspectRatio="xMinYMin meet" -->
        </div>
        <div class='controls'>
            <button class='prev'></button>
            <button class='play-pause play'></button>
            <button class='next'></button>
            <button class='volume' data-vaue='90'></button>
        </div>
        <div class='temps'>
            <div class='en-cours'>1:31</div>
            <div class='total'>3:11</div>
        </div>
        <div class='statistiques'>
            <div class='nb-lectures'>16,5M</div>
            <div class='nb-commentaires'>280</div>
        </div>
        <div class='social'>
            <button class='like'>333K</button>
            <button class='share'>Partager</button>
        </div>
    </div>
</body>

<script src="view/javascript/traitementJSON.js"></script>
<script src="view/javascript/soundmanager2/soundmanager2.js"></script>

