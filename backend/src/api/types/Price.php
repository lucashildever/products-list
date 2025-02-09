<?php

namespace Src\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Src\Api\Types\TypeRegistry;
use Src\Api\Types\Currency;

class Price extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'price',
            'fields' => [
                'amount' => Type::float(),
                'currency' => TypeRegistry::type(Currency::class),
            ]
        ]);
    }
}