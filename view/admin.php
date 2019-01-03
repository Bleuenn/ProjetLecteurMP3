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
    <label><a href="?page=add">Ajouter une nouvelle musique</a></label>
</body>