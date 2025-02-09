<?php

namespace Src\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class Currency extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'currency',
            'fields' => [
                'label' => Type::string(),
                'symbol' => Type::string(),
            ]
        ]);
    }
}