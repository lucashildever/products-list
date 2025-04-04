<?php

namespace App\Api\Types;

use GraphQL\Type\Definition\EnumType;

class CategoryType extends EnumType {

    private const CLOTHES = 'clothes';
    private const TECH = 'tech';
    private const ALL = 'all';

    public function __construct() {
        parent::__construct([
            'name' => 'Category',
            'values' => [
                'CLOTHES' => ['value' => self::CLOTHES],
                'TECH' => ['value' => self::TECH],
                'ALL' => ['value' => self::ALL],
            ]
        ]);
    }
}