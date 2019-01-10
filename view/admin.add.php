<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Lecteur mp3</title>
    <link rel="stylesheet" type="text/css" href="view/css/style.css"/>
</head>
<body>
    <h1>Administration</h1>
    <form method="post" id="form_edit" enctype="multipart/form-data">
        <h2> Ajout d'une nouvelle musique</h2>
        <label>Titre</label>
        <input type="text" name="titre" required/>

        <label>Artiste</label>
        <input type="text" name="artiste" required/>

        <label>Album</label>
        <input type="text"  name="album" required/>

        <label>Annee</label>
        <input type="text"  name="annee" required/>

        <label>MP3</label>
        <sub>(Selectionner un fichier)</sub>
        <input type="file" name="mp3"/>

        <label>Cover</label>
        <sub>(Selectionner un fichier)</sub>
        <input type="file" name="cover"/>

        <label>Genre(s)</label>
        <sub>(Séparer les genres par des virgules)</sub>
        <input type="text"  name="genre" required/>

        <input type="submit" class="submit" value="Valider"/>
</form>
</body>