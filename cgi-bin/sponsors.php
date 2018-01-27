<?php 
//var_dump($_POST);

if(isset($_POST["email"])){
	$name = $_POST["name"];
	$business = $_POST["business"];
	$phone = $_POST["phone"];
	$email = $_POST["email"];
	
	$mysqli = new mysqli("localhost", "osumac24_admin", "ladiballer", "osumac24_blackpanther");
	$sql = "INSERT INTO sponsors (name, business, phone, email) 
	VALUES ('".$name."', '".$business."', '".$phone."', '".$email."')";
	if ($mysqli->query($sql) !== TRUE) {
	    die( "Error: " . $sql . "<br>" . $mysqli->error);
	}
	$mysqli->close();
	
	$myemail = "wakanda.info@gmail.com";
	$subj = "New Sponsor for BP So Lit Seattle - ".$name."!";
	$emess = "Sponsor Name: ".$name."\n";
	$emess.= "Business Name: ".$business."\n";
	$emess.= "Email Address: ".$email."\n";
	$emess.= "Phone Number: ".$phone."\n";
	$emess.= "\n\n--\nThis email was sent via BlackPantherSoLitSeattle.com\n";
	$ehead = "From: BlackPantherSoLit@DoNotReply.com";
	$mailsend=mail("$myemail","$subj","$emess","$ehead");
	$message = "<p>Thank you ".$name. ". Your email has been sent!</p>";

}

?>