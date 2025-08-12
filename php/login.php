<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="../css/estilo_login.css">
</head>
<body class="login-body">
  <div class="login-container">
    <h2>Iniciar Sesión</h2>
    <form action="validar_login.php" method="POST">
      <input type="text" name="usuario" placeholder="Usuario" required><br>
      <input type="password" name="clave" placeholder="Contraseña" required><br>
      <button type="submit">Ingresar</button>
    </form>
  </div>
</body>
</html>
