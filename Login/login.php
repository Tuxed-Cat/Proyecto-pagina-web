<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css">
  <title>Login - Compelo</title>
</head>
<body>
  <div class="login-box">
    <h2>¡bienvenido devuelta a <span>compelo</span>!</h2>
    
    <?php
    if (isset($_SESSION['error'])) {
        echo '<div style="color: red; margin-bottom: 10px; text-align: center; font-size: 0.9em;">' . $_SESSION['error'] . '</div>';
        unset($_SESSION['error']);
    }
    if (isset($_SESSION['success'])) {
        echo '<div style="color: green; margin-bottom: 10px; text-align: center; font-size: 0.9em;">' . $_SESSION['success'] . '</div>';
        unset($_SESSION['success']);
    }
    ?>
    
    <form action="procesar_login.php" method="POST">
      <label for="usuario">usuario</label>
      <input type="text" id="usuario" name="usuario" required />
      
      <label for="password">contraseña</label>
      <input type="password" id="password" name="password" required />
      
      <div class="register">
        ¿no tienes cuenta? <a href="registro.php">regístrate</a>
      </div>
      
      <button type="submit">iniciar sesión</button>
    </form>
  </div>
</body>
</html>