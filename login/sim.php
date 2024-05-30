<?php
// Conectar ao banco de dados
$servername = "localhost";
$username = "root";
$password = "1234";
$dbname = "seu_banco_de_dados";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar a conexão
if ($conn->connect_error) {
    die("Falha na conexão: " . $conn->connect_error);
}

// Obter os dados do formulário
$email = $_POST['email'];
$username = $_POST['username'];
$password = $_POST['password'];
$verificationCode = generateVerificationCode(); // Você precisa definir essa função

// Preparar e executar a consulta SQL para inserir os registros
$sql = "INSERT INTO users (email, username, password)
VALUES ('$email', '$username', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Registro inserido com sucesso";
} else {
    echo "Erro ao inserir registro: " . $conn->error;
}

$conn->close();
?>