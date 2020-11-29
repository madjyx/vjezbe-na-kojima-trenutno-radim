<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vjezba 2</title>
</head>

<body>
    <?php
    $color = array('white', 'green', 'red');
    //ispis ne sortiranog niza boja
    foreach ($color as $c) {
        echo "$c, ";
    }
    //funkcijom sort cemo izvrsiti sortiranje datog niza
    sort($color);
    //putem HTML elemenata ui i li generišemo zeljenu listu 
    echo "<ul>";
    foreach ($color as $y) {
        echo "<li>$y</li>";
    }
    echo "</ul>";
    ?>
</body>

</html>