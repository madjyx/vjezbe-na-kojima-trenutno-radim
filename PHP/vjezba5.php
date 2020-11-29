<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vjezba 5</title>
</head>

<body>
    <?php
    $month_temp = "78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 81, 76, 73,
68, 72, 73, 75, 65, 74, 63, 67, 65, 64, 68, 73, 75, 79, 73";
    //kreiramo niz od temperaturnih vrijednosti pri cemu je svaki element razdvojen ","
    $temp_array = explode(',', $month_temp);
    $tot_temp = 0;
    //izracunamo duzinu niza
    $temp_array_length = count($temp_array);
    //saberemo sve vrijednosti u nizu
    foreach ($temp_array as $temp) {
        $tot_temp += $temp;
    }
    //izracunamo prosjecnu temperaturu
    $avg_high_temp = $tot_temp / $temp_array_length;
    echo "Average Temperature is : " . $avg_high_temp . "";
    //sortiramo niz kako bi smo mogli pronaci pet najvisih i pet najnizih temperatura
    sort($temp_array);
    echo "<br> List of five lowest temperatures :";
    for ($i = 0; $i < 5; $i++) {
        echo $temp_array[$i] . ", ";
    }
    echo "<br> List of five highest temperatures :";
    //petlja starta pet elemenata od kraja niza
    for ($i = ($temp_array_length - 5); $i < ($temp_array_length); $i++) {
        echo $temp_array[$i] . ", ";
    }
    ?>
</body>

</html>