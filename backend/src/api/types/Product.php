<?php

namespace Src\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Src\Api\Types\TypeRegistry;
use Src\Api\Types\Category;
use Src\Api\Types\AttributeSet;
use Src\Api\Types\Price;

class Product extends ObjectType {
    public function __construct() {
        parent::__construct([
            'name' => 'product',
            'fields' => [
                'id' => Type::nonNull(Type::id()),
                'name' => Type::nonNull(Type::string()),
                'inStock' => Type::nonNull(Type::boolean()),
                'gallery' => Type::nonNull(Type::listOf(Type::string())),
                'description' => Type::nonNull(Type::string()),
                'brand' => Type::nonNull(Type::string()),
                'category' => Type::nonNull(TypeRegistry::type(Category::class)),
                'attributes' => Type::nonNull(Type::listOf(TypeRegistry::type(AttributeSet::class))),
                'prices' => Type::nonNull(Type::listOf(TypeRegistry::type(Price::class))),
            ]
        ]);
    }
};
