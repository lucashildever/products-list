<?php

$environment = $_ENV['ENVIRONMENT'];

if ($environment === 'development') {
    
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
} else {
    error_reporting(0);
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    ini_set('error_log', __DIR__ . '/error_log.log');
}
