<?php
include 'conexion.php';

$nombre = $_GET['nombre'] ?? '';
$nombre = $conexion->real_escape_string($nombre);

$sql = "SELECT * FROM empresas WHERE Nombre = '$nombre'";
$resultado = $conexion->query($sql);

$datos = [];
while ($fila = $resultado->fetch_assoc()) {
    $datos[] = $fila;
}

echo json_encode($datos);
?>
