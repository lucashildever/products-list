<?php

namespace App\Database\Repository;

use App\Database\Connection;
use App\Models\Products\ClothingProduct;
use App\Models\Products\TechProduct;
use App\Utils\Constants;
use PDO;

final class ProductRepository {
    public static function getProductById($productId) {
        $db = Connection::getInstance();

        $sql = "SELECT p.*, pr.*, g.*, a.*
                FROM products p
                LEFT JOIN prices pr ON p.id = pr.product_id
                LEFT JOIN gallery g ON p.id = g.product_id
                LEFT JOIN attributes a ON p.id = a.product_id
                WHERE p.id = :product_id";

        $stmt = $db->prepare($sql);

        $stmt->bindValue(':product_id', $productId);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        var_dump($result[0]);
        
        return $productId; 
    }

    public static function getProductsByCategory($category) {
        return $category;
    }
}
