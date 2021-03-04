<!DOCTYPE html>
<html>
<head>
<h1>Toronto Artists</h1>
<style>
table, th, td {
    border: 1px solid black;
}
</style>
</head>
<body>

<?php

//Connection variables
$servername = "localhost";
$username = "root";
$password = "mysql";
$dbname = "mysql";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$term = mysql_real_escape_string($_REQUEST['term']); 

$sql = "SELECT * FROM Toronto_Artists WHERE name LIKE $term";
$result = $conn->query($sql);

if ($result->num_rows > 0) {

    echo "<table><tr><th>id</th><th>name</th>";

    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row['id']. "</td><td>" . $row['name']. "</td></tr>";
    }

    echo "</table>";

}

else {
    echo "0 results";
}

$conn->close();
?>

</body>
</html>