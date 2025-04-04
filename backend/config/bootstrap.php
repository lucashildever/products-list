<?php

require_once dirname(__DIR__).'/vendor/autoload.php';

Dotenv\Dotenv::createImmutable(dirname(__DIR__))->load();

require_once __DIR__.'/debug.php';

use App\Database\Connection;

Connection::make();