<?php

namespace App\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Api\Types\TypeRegistry;
use App\Api\Types\AttributeType;

class AttributeSetType extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'attributeSet',
            'fields' => [
                'id' => Type::id(),
                'name' => Type::string(),
                'type' => Type::string(),
                'items' => Type::listOf(TypeRegistry::type(AttributeType::class))
            ]
        ]);
    }
}