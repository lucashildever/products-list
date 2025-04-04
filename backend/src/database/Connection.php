<?php

namespace App\Database;

use PDOException;
use PDO;

class Connection{

    private static ?PDO $instance = null;

    private function __construct(){}
    private function __clone(){}

    public static function getInstance(){
        if (self::$instance === null)
            self::make();
        return self::$instance;
    }

    public static function make(){
        try {
            $host = $_ENV['DB_HOST'];
            $dbname = $_ENV['DB_NAME'];
            $username = $_ENV['DB_USER'];
            $password = $_ENV['DB_PASS'];
            $port = $_ENV['DB_PORT'] ?? '3306';
            
            $dsn = "mysql:host={$host};port={$port};dbname={$dbname};charset=utf8mb4";
            
            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false,
            ];
            self::$instance = new PDO($dsn, $username, $password, $options);
        } catch (PDOException $e) {
            die("Connection error: " . $e->getMessage());
        }
    }
}