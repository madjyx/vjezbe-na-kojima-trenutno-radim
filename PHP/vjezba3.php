<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vjezba 3</title>
</head>

<body>
    <?php
    $ceu = array(
        "Italy" => "Rome", "Luxembourg" => "Luxembourg",
        "Belgium" => "Brussels", "Denmark" => "Copenhagen",
        "Finland" => "Helsinki", "France" => "Paris",
        "Slovakia" => "Bratislava", "Slovenia" => "Ljubljana",
        "Germany" => "Berlin", "Greece" => "Athens",
        "Ireland" => "Dublin", "Netherlands" => "Amsterdam",
        "Portugal" => "Lisbon", "Spain" => "Madrid",
        "Sweden" => "Stockholm", "United Kingdom" => "London",
        "Cyprus" => "Nicosia", "Lithuania" => "Vilnius",
        "Czech Republic" => "Prague", "Estonia" => "Tallin",
        "Hungary" => "Budapest", "Latvia" => "Riga", "Malta" => "Valetta",
        "Austria" => "Vienna", "Poland" => "Warsaw"
    );
    //sortiramo niz zadrzavajuci key/value veze
    asort($ceu);
    //ispisemo niz na zeljeni nacin
    foreach ($ceu as $country => $capital) {
        echo "<br>The capital of $country is $capital" . "\n";
    }
    ?>
</body>

</html>