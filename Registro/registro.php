<?php
session_start();
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="styles.css">
  <title>Registro - Compelo</title>
</head>
<body>
  <div class="register-box">
    <h2>¡registro a <span>compelo</span>!</h2>
    
    <?php
    if (isset($_SESSION['error'])) {
        echo '<div style="color: red; margin-bottom: 10px; text-align: center; font-size: 0.9em;">' . $_SESSION['error'] . '</div>';
        unset($_SESSION['error']);
    }
    ?>
    
    <form action="procesar_registro.php" method="POST">
      <label for="usuario">usuario</label>
      <input type="text" id="usuario" name="usuario" required />

      <label for="email">correo electrónico</label>
      <input type="email" id="email" name="email" required />

      <label for="password">contraseña</label>
      <input type="password" id="password" name="password" required />

      <label for="confirmar">confirmar contraseña</label>
      <input type="password" id="confirmar" name="confirmar" required />

      <button type="submit">registrar</button>
    </form>
    
    <div style="text-align: center; margin-top: 15px;">
      <a href="login.php" style="color: #00bfff; text-decoration: none;">¿Ya tienes cuenta? Inicia sesión</a>
    </div>
  </div>
</body>
</html>