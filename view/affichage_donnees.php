<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
	<title>Lecteur mp3</title>
	<link rel="stylesheet" type="text/css" href="view/css/style.css"/>
</head>

<body>
<h1>Lecteur mp3</h1>

<div class="liste">
	<table>
		<thead>
		<tr>
			<th>Titre de la musique</th>
			<th>Nom de l 'artiste</th>
			<th>Année de mise en vente</th>
			<th>Nombre de like</th>
			<th>Chemin du MP3</th>
		</tr>
		</thead>
		<tbody id="bodyTableau">
		</tbody>
	</table>
</div>

<form>
	<input type="text" id='saisie'>
	<input type='submit' value='Recup Infos' onclick="afficheData(this.value)"/>
</form>

<p id="affichage"></p>


<!----- SCRIPTS JS ----->
<script src="view/javascript/affichageDonnees.js"></script>
</body>
</html>