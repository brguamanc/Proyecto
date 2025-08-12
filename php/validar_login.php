<?php
session_start();
$host = "sql111.infinityfree.com"; // Reemplaza con el hostname real
$usuario = "if0_39103136"; // Tu nombre de usuario
$contrasena = "ZhLJfEvDJh78"; // Tu contraseña de la base de datos
$bd = "if0_39103136_usuarios_db"; // Nombre completo de la base de datos

$conexion = new mysqli($host, $usuario, $contrasena, $bd);

$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

$consulta = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario' AND contraseña='$clave'";
$resultado = mysqli_query($conexion, $consulta);

if (mysqli_num_rows($resultado) > 0) {
    $_SESSION['usuario'] = $usuario;
    header("Location: ../pages/divicion.html");
} else {
    echo "<script>alert('Credenciales incorrectas'); window.location='login.php';</script>";
}
?>
