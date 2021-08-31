<?php
#Токен бота
$token = '1998903984:AAFL4MqsSgzWcKae2Haors2rt5wz1tSm-iU';

#ID чата. Это может быть канал, группа или пользователь
$chatId = '-510019747';

#Форма данных с HTML
$name = htmlspecialchars($_REQUEST["name"]);
$phone = htmlspecialchars($_REQUEST["phone"]);
$message = htmlspecialchars($_REQUEST["message"]);

#Массив формы отправки
$sendForm = [
    'chat_id' => $chatId,
    'text' =>
    "Исм: $name \n" .
        "Номер: $phone \n" .
        "Савол: $message \n"
];
$url = 'https://api.telegram.org/bot' . $token . '/sendMessage?' . http_build_query($sendForm);

file_get_contents($url);
