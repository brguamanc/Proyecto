<?php
$host = "sql111.infinityfree.com"; // Reemplaza con el hostname real
$usuario = "if0_39103136"; // Tu nombre de usuario
$contrasena = "ZhLJfEvDJh78"; // Tu contraseña de la base de datos
$bd = "if0_39103136_usuarios_db"; // Nombre completo de la base de datos

$conexion = new mysqli($host, $usuario, $contrasena, $bd);

$usuario = $_POST['usuario'];
$clave = $_POST['clave'];

// Verificar si el usuario ya existe
$verificar_usuario = "SELECT * FROM usuarios WHERE nombre_usuario='$usuario'";
$resultado = mysqli_query($conexion, $verificar_usuario);

if (mysqli_num_rows($resultado) > 0) {
    echo "<script>alert('El usuario ya existe.'); window.location='registro.php';</script>";
} else {
    // Insertar nuevo usuario
    $insertar = "INSERT INTO usuarios(nombre_usuario, contraseña) VALUES('$usuario', '$clave')";
    if (mysqli_query($conexion, $insertar)) {
        echo "<script>alert('Usuario registrado con éxito'); window.location='login.php';</script>";
    } else {
        echo "<script>alert('Error al registrar usuario'); window.location='registro.php';</script>";
    }
}
?>
