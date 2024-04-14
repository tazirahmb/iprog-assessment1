<?php

  include 'connection.php';

  $order_id = $_GET['orderId'];

   $query_string = "SELECT * FROM orders where order_id = $order_id";
   
   $result = mysqli_query($conn, $query_string);

   $rows = array();
   if(mysqli_num_rows($result) === 1) { // ensure only 1 order returned
     while($r = mysqli_fetch_assoc($result)) {
       $rows[] = $r;
      }
    }

   print json_encode($rows);
?>