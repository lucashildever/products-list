<?php

namespace Src\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Src\Api\Types\TypeRegistry;
use Src\Api\Types\Attribute;

class AttributeSet extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'attributeSet',
            'fields' => [
                'id' => Type::id(),
                'name' => Type::string(),
                'type' => Type::string(),
                'items' => Type::listOf(TypeRegistry::type(Attribute::class))
            ]
        ]);
    }
}