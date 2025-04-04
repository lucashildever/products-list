<?php

namespace App\Models\Products;

use App\Models\Abstracts\AbstractProduct;
use App\Utils\Constants;

class ClothingProduct extends AbstractProduct {

    public $category = Constants::ProductCategory['CLOTHING'];
    
    public function __construct(
        $id,
        $name,
        $price,
        $brand,
        $prices,
        $galery,
        $inStock,
        $attributes,
        $description
    ) {
        parent::__construct(
            $id,
            $name,
            $price,
            $brand,
            $prices,
            $galery,
            $inStock,
            $attributes,
            $description
        );
    }
}