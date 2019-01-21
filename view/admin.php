<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <title>Lecteur mp3</title>
    <link rel="stylesheet" type="text/css" href="view/css/style.css"/>
</head>
<body>
    <h1>Administration</h1>
    <table>
        <thead>
            <th>Play</th>
            <th>Titre</th>
            <th>Album</th>
            <th>Artiste</th>
            <th>Annee</th>
            <th>Modifier</th>
            <th>Supprimer</th>
        </thead>
        <tbody>
            <?php echo $TABLEAU; ?>
        </tbody>
    </table>
    <label id="add"><a href="?page=add"><span class="icon"></span> Ajouter une musique</a></label>
</body>