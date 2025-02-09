<?php

namespace Src\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class Attribute extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'attribute',
            'fields' => [
                'id' => Type::id(),
                'value' => Type::int(),
                'displayValue' => Type::int(),
            ]
        ]);
    }
};
