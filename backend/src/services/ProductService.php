<?php

namespace App\Services;

use App\Database\Repository\ProductRepository;

final class ProductService {
    public static function resolve($payload) {
        if ($payload['searchType'] == 'id') {
            return ProductRepository::getProductById($payload['productId']);
        } else if ($payload['searchType'] == 'category') {
            return ProductRepository::getProductsByCategory($payload['category']);
        }
        return json_encode($payload, JSON_PRETTY_PRINT);
    }
}