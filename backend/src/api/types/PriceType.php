<?php

namespace App\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Api\Types\TypeRegistry;
use App\Api\Types\CurrencyType;

class PriceType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'price',
            'fields' => [
                'amount' => Type::float(),
                'currency' => TypeRegistry::type(CurrencyType::class),
            ]
        ]);
    }
}