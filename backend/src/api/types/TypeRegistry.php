<?php

namespace Src\Api\Types;

final class TypeRegistry {
    private static array $types = [];

    public static function type(string $classname): \Closure {
        return static fn () => self::$types[$classname] ??= new $classname();
    }
}