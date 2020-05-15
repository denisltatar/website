<?php
    // New Stuff (Denis)
if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mail'];
    $subject = "Message from Personal Portfolio Site"; 
    $message = $_POST['message'];

    // Need to change this
    $mailTo = "denis.tatar8@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;

    // Sending out mail!
    mail($mailTo, $subject, $txt, $headers);
        
    // Taking us back to the main page
    header("Location: index.html?mailsend");
}
   

    // Assigning our variables
    // $name = $_POST['your-name'];
    // $email = $_POST['your-email'];
    // $message = $_POST['your-message'];

    // // Setting up what I'll be receiving
    // $email_from = 'Denis Tatar Portfolio Website';
    // $email_subject = 'New Message from Portfolio Website';
    // $email_body = "Name: $name.\n".
    //               "Email: $email.\n".
    //               "Message: $message.\n";

    
    // // What email will receive these messages and how?
    // $to = "denis.tatar8@gmail.com";
    // $headers = "From: $email_from \r\n";
    // $headers .= "Reply-To: $email \r\n";

    // // Actions to be taken
    // mail($to,$email_subject,$email_body,$headers);

    // // After submitting, where will user be sent?
    // header("location: test.html");

?>