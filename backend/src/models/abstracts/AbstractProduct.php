<?php

namespace App\Models\Abstracts;

abstract class AbstractProduct {
    protected $id;
    protected $name;
    protected $price;
    protected $brand;
    protected $prices;
    protected $galery;
    protected $inStock;
    protected $attributes;
    protected $description;

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
        $this->id = $id;
        $this->name = $name;
        $this->price = $price;
        $this->brand = $brand;
        $this->prices = $prices;
        $this->galery = $galery;
        $this->inStock = $inStock;
        $this->attributes = $attributes;
        $this->description = $description;
    }
}