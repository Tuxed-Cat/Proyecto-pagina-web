<?php
// procesar_registro.php - Procesar el formulario de registro
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = trim($_POST['usuario']);
    $email = trim($_POST['email']);
    $password = $_POST['password'];
    $confirmar = $_POST['confirmar'];
    
    // Validaciones básicas
    if (empty($usuario) || empty($email) || empty($password) || empty($confirmar)) {
        $_SESSION['error'] = 'Todos los campos son obligatorios';
        header('Location: registro.php');
        exit();
    }
    
    if ($password !== $confirmar) {
        $_SESSION['error'] = 'Las contraseñas no coinciden';
        header('Location: registro.php');
        exit();
    }
    
    if (strlen($password) < 6) {
        $_SESSION['error'] = 'La contraseña debe tener al menos 6 caracteres';
        header('Location: registro.php');
        exit();
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $_SESSION['error'] = 'El email no es válido';
        header('Location: registro.php');
        exit();
    }
    
    try {
        // Verificar si el usuario ya existe
        $stmt = $pdo->prepare("SELECT id FROM usuarios WHERE usuario = ? OR email = ?");
        $stmt->execute([$usuario, $email]);
        
        if ($stmt->rowCount() > 0) {
            $_SESSION['error'] = 'El usuario o email ya existe';
            header('Location: registro.php');
            exit();
        }
        
        // Encriptar la contraseña
        $password_hash = password_hash($password, PASSWORD_DEFAULT);
        
        // Insertar el nuevo usuario
        $stmt = $pdo->prepare("INSERT INTO usuarios (usuario, contrasena, email) VALUES (?, ?, ?)");
        $stmt->execute([$usuario, $password_hash, $email]);
        
        $_SESSION['success'] = 'Registro exitoso. Ya puedes iniciar sesión';
        header('Location: login.php');
        exit();
        
    } catch(PDOException $e) {
        $_SESSION['error'] = 'Error en el registro: ' . $e->getMessage();
        header('Location: registro.php');
        exit();
    }
} else {
    header('Location: registro.php');
    exit();
}
?>