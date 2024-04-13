<?php

  include 'connection.php';

   $query_string = "SELECT categories_id as _id, categories_name as name FROM categories";
   
   $result = mysqli_query($conn, $query_string);

   $rows = array();
  while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
  }

   print json_encode($rows);
?>