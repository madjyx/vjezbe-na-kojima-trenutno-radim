<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vjezba 4</title>
</head>

<body>
    <?php
    $original = array('1', '2', '3', '4', '5');
    echo 'Original array : ' . "\n";
    foreach ($original as $x) {
        echo "$x ";
    }
    $inserted = '$';
    //Removes the elements designated by offset and length from the input array, 
    //and replaces them with the elements of the replacement array, if supplied. 
    array_splice($original, 3, 0, $inserted);
    echo "<br>After inserting '$' the array is : " . "\n";
    foreach ($original as $x) {
        echo "$x ";
    }
   
    ?>
</body>

</html>