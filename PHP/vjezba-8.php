<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <?php
    $a = 15;
    $b = 25;

    // Swap Logic

    echo "\nThe number before swapping is:";
    echo "<br/>";
    echo "Number a =" . $a . " and b=" . $b;
    echo "<br/>";

    $temp = $a;
    $a = $b;
    $b = $temp;

    echo "\nThe number after swapping is: ";
    echo "<br/>";
    echo "Number a =" . $a . " and b=" . $b;
    ?>
</body>

</html>