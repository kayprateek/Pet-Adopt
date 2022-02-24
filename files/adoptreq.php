<?php
$name=$_POST['uname'];
$email=$_POST['uemail'];
$city=$_POST['ucity'];
$phno=$_POST['uphno'];
$petid=$_POST['petid'];

$servername="localhost";
$username="id18515585_admin";
$password="#(nI38e#*?]}s1S<";
$dbname="id18515585_ajax";

$conn= new mysqli($servername,$username,$password,$dbname);
if($conn){
    echo "true";   
    $stmt=$conn->prepare("INSERT INTO usersadopt values (?,?,?,?,?);");
    $stmt->bind_param("sssii",$name,$email,$city,$phno,$petid);
    $stmt->execute();
}
else{
    echo "ConnectionError";
}
?>