<?php

namespace App\Api\Types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use App\Api\Types\TypeRegistry;
use App\Api\Types\CategoryType;
use App\Api\Types\AttributeSetType;
use App\Api\Types\PriceType;

class ProductType extends ObjectType {
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
                'category' => Type::nonNull(TypeRegistry::type(CategoryType::class)),
                'attributes' => Type::nonNull(Type::listOf(TypeRegistry::type(AttributeSetType::class))),
                'prices' => Type::nonNull(Type::listOf(TypeRegistry::type(PriceType::class))),
            ]
        ]);
    }
};
