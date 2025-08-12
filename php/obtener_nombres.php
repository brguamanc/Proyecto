<?php
include 'conexion.php';

$sql = "SELECT DISTINCT Nombre FROM empresas";
$resultado = $conexion->query($sql);

$nombres = [];
while ($fila = $resultado->fetch_assoc()) {
    $nombres[] = $fila['Nombre'];
}

echo json_encode($nombres);
?>
