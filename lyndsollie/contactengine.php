<?php

$EmailTo = "bayne.jen@gmail.com";
$Subject = "RSVP to Lynds and Ollie's wedding";
$Name = Trim(stripslashes($_POST['Name'])); 
$Email = Trim(stripslashes($_POST['Email'])); 
$RSVP = Trim(stripslashes($_POST['RSVP'])); 
$Song = Trim(stripslashes($_POST['Song'])); 
$Vegetarian = Trim(stripslashes($_POST['Vegetarian'])); 

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "RSVP: ";
$Body .= $RSVP;
$Body .= "\n";
$Body .= "Song: ";
$Body .= $Song;
$Body .= "\n";
$Body .= "Vegetarian: ";
$Body .= $Vegetarian;
$Body .= "\n";


// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=contactthanks.php\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>