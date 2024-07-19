header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);
    $name = $data->name;
    $email = $data->email;
    $message = $data->message;

    $servername = "https://auth-db1526.hstgr.io/index.php?db=u472443049_RugbyGaston";
    $username = "asociacionrugbyprofesional";
    $password = "AsociacionPro2024-";
    $dbname = "u472443049_RugbyGaston";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO users (name, email, message) VALUES (?, ?)");
    $stmt->bind_param("ss", $name, $email, $message);

    if ($stmt->execute()) {
        $response = array("status" => "success", "message" => "Data inserted successfully");
    } else {
        $response = array("status" => "error", "message" => "Data insertion failed");
    }

    $stmt->close();
    $conn->close();

    echo json_encode($response);

} else {
    // Handle any other HTTP method
    echo "Invalid request method";
    

    

};