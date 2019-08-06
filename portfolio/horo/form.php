<?php
    $zodiac = $_POST['zodiac'];
    $email = $_POST['email'];
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Данные из формы</title>
</head>
<body>
    <h1>Данные из формы</h1>
    <h3>Знак зодиака: <span><?=$zodiac?></span></h3>
    <h3>E-mail: <span><?=$email?></span></h3>
</body>
</html>