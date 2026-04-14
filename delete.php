<?php
header('Content-Type: application/json');

$conn = mysqli_connect('localhost', 'root', '', 'manipulating_json');

if (!$conn) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

$sql = "DELETE FROM department_employees_json";

if (mysqli_query($conn, $sql)) {
    echo json_encode(['success' => true, 'message' => 'All data deleted successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error deleting data']);
}

mysqli_close($conn);
?>