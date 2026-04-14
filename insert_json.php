<?php
header('Content-Type: application/json');

$conn = mysqli_connect('localhost', 'root', '', 'manipulating_json');

if (!$conn) {
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}

$json = file_get_contents('departments.json');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON file']);
    exit;
}

$success = 0;

foreach ($data as $dept_name => $dept_data) {
    $city = $dept_data['city'];
    $employees = json_encode($dept_data['employees']);
    
    $sql = "INSERT INTO department_employees_json (city_name, department_name, employee_details) 
            VALUES ('$city', '$dept_name', '$employees')";
    
    if (mysqli_query($conn, $sql)) {
        $success++;
    }
}

mysqli_close($conn);

echo json_encode(['success' => true, 'message' => "Inserted $success departments"]);
?>