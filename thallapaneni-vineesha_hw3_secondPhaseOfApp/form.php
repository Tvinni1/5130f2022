<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "iws";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST['save'])){
  $f_name= $_POST['firstName'];
  $l_name= $_POST['lastname'];
  $cci_name= $_POST['currentcity'];
  $cco_name= $_POST['currentcountry'];
  $dd_name= $_POST['dreamdestination'];
  $fv_name= $_POST['favouriteadventures'];
  $wp_name= $_POST['workplace'];
  $pb_name= $_POST['placeofbirth'];
  $e_name= $_POST['email'];
  $cn_name= $_POST['contactnumber'];

  
  $insert_que ="INSERT INTO form (firstName,lastname,currentcity,currentcountry,dreamdestination,favouriteadventures,workplace,placeofbirth,email,contactnumber) VALUES ('$f_name','$l_name','$cci_name','$cco_name','$dd_name','$fv_name','$wp_name','$pb_name','$e_name','$cn_name')";
  if ($conn->query($insert_que) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $insert_que . "<br>" . $conn->error;
  }
}


?>

<html>
<title>Form</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<body>

<form method="POST" class="w3-container w3-card-4 w3-light w3-text-blue w3-margin">
<h2 class="w3-center">Enter your details</h2>
<div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-user"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="firstName" type="text" placeholder="First name" id="firstName">
      </div>
  </div>
  <div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-user"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="lastname" type="text" placeholder="Last name">
      </div>
  </div>
<div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-location-arrow"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="currentcity" type="text" placeholder="Current city">
      </div>
  </div>
<div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-location-arrow"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="currentcountry" type="text" placeholder="Current country">
      </div>
  </div>
  <div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-location-arrow"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="dreamdestination" type="text" placeholder="Dream destination">
      </div>
  </div>
</div>
<div class="w3-row w3-section">
    <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-pencil"></i></div>
      <div class="w3-rest">
        <input class="w3-input w3-border" name="favouriteadventures" type="text" placeholder="Favourite adventures">
      </div>
  </div>
<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-location-arrow"></i></div>
    <div class="w3-rest">
      <input class="w3-input w3-border" name="workplace" type="text" placeholder="Work place">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-location-arrow"></i></div>
    <div class="w3-rest">
      <input class="w3-input w3-border" name="placeofbirth" type="text" placeholder="Place of Birth">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-envelope-o"></i></div>
    <div class="w3-rest">
      <input class="w3-input w3-border" name="email" type="email" placeholder="Your Email">
    </div>
</div>

<div class="w3-row w3-section">
  <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-phone"></i></div>
    <div class="w3-rest">
      <input class="w3-input w3-border" name="contactnumber" type="number" placeholder="Your contact number">
    </div>
</div>



<p class="w3-center">
<button class="w3-button w3-section w3-blue w3-ripple" name="save" id="save" type="submit">Send </button>
</p>
</form>

</body>
</html> 