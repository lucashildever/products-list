<?php

namespace App\Models;

use App\Models\Abstracts\AbstractCategory;

class Category extends AbstractCategory {

    public function __construct($categoryName) {
        parent::__construct($categoryName);
    }
};