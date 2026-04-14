<?php
header('Content-Type: application/json');

$conn = mysqli_connect('localhost', 'root', '', 'manipulating_json');

if (!$conn) {
    echo json_encode([]);
    exit;
}

$result = mysqli_query($conn, "SELECT * FROM department_employees_json ORDER BY department_name");

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $row['employee_details'] = json_decode($row['employee_details'], true);
    $data[] = $row;
}

mysqli_close($conn);

echo json_encode($data);
?>