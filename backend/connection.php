<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

  $conn = mysqli_connect('localhost','root','pwd123','assignment1');
   
    if (mysqli_connect_errno()) {
       echo "Failed to connect to MySQL: " . mysqli_connect_error();
       exit;
  }
?>