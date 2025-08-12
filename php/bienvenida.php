<?php
session_start();
if (!isset($_SESSION['usuario'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Bienvenido</title>
  <link rel="stylesheet" href="estiloslogin.css">
</head>
<body>
  <div class="login-container">
    <h1>¡Bienvenido, <?php echo $_SESSION['usuario']; ?>!</h1>
    <a href="cerrar_sesion.php">Cerrar sesión</a>
  </div>
</body>
</html>
