<?php
include "db.php";

$sql = "SELECT * FROM news";
$result = $conn->query($sql);

$news = [];
while ($row = $result->fetch_assoc()) {
    $news[] = $row;
}

echo json_encode($news);
?>
