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
        <h2>Modification : <?php echo $TITRE ?></h2>

        <label>Titre</label>
        <input type="text" name="titre" value="<?php echo $TITRE ?>" required/>

        <label>Artiste</label>
        <input type="text" name="artiste" value="<?php echo $ARTISTE ?>" required/>

        <label>Album</label>
        <input type="text"  name="album" value="<?php echo $ALBUM ?>" required/>

        <label>MP3</label>
        <sub class="chemin">Actuel : <?php echo $MP3 ?></sub>
        <input type="hidden" name="old_mp3" value="<?php echo $MP3 ?>">
        <sub>(Selectionner un nouveau fichier)</sub>
        <input type="file" name="mp3"/>

        <label>Cover</label>
        <sub class="chemin">Actuel : <?php echo $COVER ?></sub>
        <input type="hidden" name="old_cover" value="<?php echo $COVER ?>">
        <sub>(Selectionner un nouveau fichier)</sub>
        <input type="file" name="cover"/>

        <label>Genre(s)</label>
        <sub>(Séparer les genres par des virgules)</sub>
        <input type="text"  name="genre" value="<?php echo $GENRE ?>" required/>

        <input type="submit" class="submit" value="Valider"/>
    </form>
</body>