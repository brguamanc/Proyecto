<?php
$host = "sql111.infinityfree.com"; // Reemplaza con el hostname real
$usuario = "if0_39103136"; // Tu nombre de usuario
$contrasena = "ZhLJfEvDJh78"; // Tu contraseña de la base de datos
$bd = "if0_39103136_mi_base_datos"; // Nombre completo de la base de datos

$conexion = new mysqli($host, $usuario, $contrasena, $bd);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
} else {
    echo "Conexión exitosa";
}
?>