<?php

include './php/functions.php';

// check if user is logged in
$currentPageName = basename($_SERVER['PHP_SELF']);
if($currentPageName != 'login.php' && !userIsLoggedIn()){
  header('Location: login.php');
}
?>