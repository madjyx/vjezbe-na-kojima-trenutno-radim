<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Vježba 4</title>
</head>

<body>
    <form method='POST'>
        <h2>Please input your name:</h2>
        <input type="text" name="name" placeholder="enter your name">
        <input type="submit" value="Submit Name">
    </form>
    <?php
    //Retrieve name from query string and store to a local variable
    //ako ne koristite funkciju isset kako bi ste provjerili da li je varijabla
    //name inicijalizirana dobili bi se upozorenje od web preglednika. 
    //Za ovu vjezbu mozete i propustiti provjeru varijable name. 
    if (!isset($_POST['name']))
        $inputname = "";
    else
        $inputname = $_POST['name'];

    echo "<h3> Hello $inputname </h3>";
    ?>
</body>

</html>