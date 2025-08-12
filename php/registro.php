<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Registro de Usuario</title>
  <link rel="stylesheet" href="../css/estilo_login.css">
</head>
<body class="login-body">
  <div class="login-container">
    <h2>Registro de Usuario</h2>
    <form action="registrar_usuario.php" method="POST">
      <input type="text" name="usuario" placeholder="Usuario" required><br>
      <input type="password" name="clave" placeholder="Contraseña" required><br>
      <button type="submit">Registrar</button>
    </form>
    <p>¿Ya tienes una cuenta? <a href="login.php">Inicia sesión</a></p>
  </div>
</body>
</html>
