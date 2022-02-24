<?php
$name=$_POST['uname'];
$email=$_POST['uemail'];
$phno=$_POST['uphno'];

$servername="localhost";
$username="id18515585_admin";
$password="#(nI38e#*?]}s1S<";
$dbname="id18515585_ajax";

$conn= new mysqli($servername,$username,$password,$dbname);
if($conn){
    $result=$conn->query('SELECT* FROM users WHERE email="'.$email.'"OR phno='.$phno.' LIMIT 1;');
    if($result->num_rows>0){
        echo $result->fetch_assoc()["name"];
    }
    else{
        echo "true";
        $stmt=$conn->prepare("INSERT INTO users (name,email,phno) values (?,?,?);");
        $stmt->bind_param("ssi",$name,$email,$phno);
        $stmt->execute();
    }
}
else {
echo "ConnectionError";
}
?>
