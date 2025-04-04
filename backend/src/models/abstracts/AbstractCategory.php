<?php 

namespace App\Models\Abstracts;

abstract class AbstractCategory {
    
    protected $categoryName;

    public function __construct($categoryName) {
        $this->categoryName = $categoryName;
    }
};