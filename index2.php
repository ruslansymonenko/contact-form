<?php

$userData = $_GET;

function getUserData($data)
{
  $userName = $data['userName'];
  $userPhone = $data['userPhone'];

  echo ("{$userName} + {$userPhone}");
}

getUserData($userData);