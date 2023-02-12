<?php 
    try {
        require('conexao.php');
    
        $stmt = $conn->prepare('INSERT INTO tb_usuario (nm_usuario, ds_login, ds_senha, id_responsavel, id_nivel) VALUES (:nome, :ds_login, :senha, :responsavel, :nivel)');
        $stmt->execute(array(
            ':nome' => $_POST['nm_usuario'],
        ));
    
    } catch(PDOException $e) {
        echo "<br>".$stmt->rowCount();
        echo 'Error: ' . $e->getMessage();
    }
?>