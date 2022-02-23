<?php
$name=$_POST['uname'];
$email=$_POST['uemail'];
$city=$_POST['ucity'];
$phno=$_POST['uphno'];
$petid=$_POST['petid'];

$servername="localhost";
$username="root";
$password="";
$dbname="ajax";

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