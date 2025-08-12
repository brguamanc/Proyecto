<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $direccion = $_POST['direccion'];
    $vigencia = $_POST['vigencia'];
    $actividad = $_POST['actividad'];
    $contacto = $_POST['contacto'];
    $pagina_web = $_POST['pagina_web'];

    $sql = "INSERT INTO empresas (nombre, direccion, vigencia, actividad, contacto, pagina_web)
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("ssssss", $nombre, $direccion, $vigencia, $actividad, $contacto, $pagina_web);

    if ($stmt->execute()) {
        echo "<script>alert('Empresa agregada exitosamente'); window.location.href='agregar.html';</script>";
    } else {
        echo "<script>alert('Error al guardar: " . $stmt->error . "'); window.history.back();</script>";
    }

    $stmt->close();
    $conexion->close();
}
?>
