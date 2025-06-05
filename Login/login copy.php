<?php
// procesar_login.php - Procesar el formulario de login
session_start();
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $usuario = trim($_POST['usuario']);
    $password = $_POST['password'];
    
    // Validaciones básicas
    if (empty($usuario) || empty($password)) {
        $_SESSION['error'] = 'Usuario y contraseña son obligatorios';
        header('Location: login.php');
        exit();
    }
    
    try {
        // Buscar el usuario en la base de datos
        $stmt = $pdo->prepare("SELECT id, usuario, contrasena FROM usuarios WHERE usuario = ?");
        $stmt->execute([$usuario]);
        
        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // Verificar la contraseña
            if (password_verify($password, $user['contrasena'])) {
                // Login exitoso
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['usuario'] = $user['usuario'];
                $_SESSION['success'] = 'Inicio de sesión exitoso';
                
                // Redirigir a página principal o dashboard
                header('Location: dashboard.php'); // Cambia por tu página principal
                exit();
            } else {
                $_SESSION['error'] = 'Credenciales incorrectas';
                header('Location: login.php');
                exit();
            }
        } else {
            $_SESSION['error'] = 'Credenciales incorrectas';
            header('Location: login.php');
            exit();
        }
        
    } catch(PDOException $e) {
        $_SESSION['error'] = 'Error en el login: ' . $e->getMessage();
        header('Location: login.php');
        exit();
    }
} else {
    header('Location: login.php');
    exit();
}
?>