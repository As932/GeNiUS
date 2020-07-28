<?php
 
if($_POST) {
    $first_name = "";
    $last_name = "";
    $email_address= "";
    $message = "";
     
    if(isset($_POST['first-name'])) {
        $first_name = filter_var($_POST['first-name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['last-name'])) {
        $last_name = filter_var($_POST['last-name'], FILTER_SANITIZE_STRING);
    }
     
    if(isset($_POST['email-address'])) {
        $email_address = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email-address']);
        $email_address = filter_var($email_address, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }

    $recipient = "stanciuandreea932@gmail.com";
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email_address . "\r\n";
     
    if(mail($recipient, "", $message, $headers)) {
        echo "<p>Thank you for contacting us, $last_name $first_name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
     
} else {
    echo '<p>Something went wrong</p>';
}
 
?>