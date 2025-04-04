<?php

namespace App\Api;

use App\Api\Types\ProductType;
use App\Api\Types\TypeRegistry;
use GraphQL\GraphQL as GraphQLBase;
use GraphQL\Type\Definition\InputObjectType;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Schema;
use GraphQL\Type\SchemaConfig;
use App\Services\ProductService;
use App\Services\OrderService;
use RuntimeException;
use Throwable;

class GraphQL {
    static public function handle() {
        try {
            // add this to a separate 
            // utils file
            $productSearchInputType = new InputObjectType([
                'name' => 'ProductSearchInput',
                'fields' => [
                    'searchType' => Type::nonNull(Type::string()),
                    'productId' => Type::string(),
                    'category' => Type::string()
                ]
            ]);

            $orderInputType = '';

            $queryType = new ObjectType([
                'name' => 'Query',
                'fields' => [
                    'productById' => [
                        'type' =>Type::string(),
                        // 'type' => TypeRegistry::type(ProductType::class),
                        'args' => [
                            'searchParams' => [
                                'type' => $productSearchInputType
                            ]
                        ],
                        'resolve' => static fn($root, $args) => ProductService::resolve($args['searchParams'])                    ],
                    'productsByCategory' => [
                        'type' => Type::string(),
                        'args' => [
                            'searchParams' => [
                                'type' => $productSearchInputType
                            ]
                        ],
                        'resolve' => static fn($root, $args) => ProductService::resolve($args['searchParams'])
                    ]
                ],
            ]);
        
            $mutationType = new ObjectType([
                'name' => 'Mutation',
                'fields' => [
                    'placeOrder' => [
                        'type' => Type::string(),
                        'args' => [
                            'orderData' => ['type' => Type::string()],
                        ],
                        'resolve' => static function ($calc, array $args) {
                            return OrderService::resolve($args['orderData']);
                        }
                    ],
                ],
            ]);
        
            $schema = new Schema(
                (new SchemaConfig())
                ->setQuery($queryType)
                ->setMutation($mutationType)
            );
        
            $rawInput = file_get_contents('php://input');
            if ($rawInput === false) {
                throw new RuntimeException('Failed to get php://input');
            }
        
            $input = json_decode($rawInput, true);
            $query = $input['query'];
            $variableValues = $input['variables'] ?? null;
        
            $rootValue = ['prefix' => 'You said: '];
            $result = GraphQLBase::executeQuery($schema, $query, $rootValue, null, $variableValues);
            $output = $result->toArray();

        } catch (Throwable $e) {
            $output = [
                'error' => [
                    'message' => $e->getMessage(),
                ],
            ];
        }

        header('Content-Type: application/json; charset=UTF-8');
        return json_encode($output);
    }
}