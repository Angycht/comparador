<?php

require_once '../src/app/backend/ShippingCalculatorController.php';
require_once '../src/app/backend/ShippingCalculator.php';

$request = $_POST;

try {
    $controller = new ShippingCalculatorController();
    $response = $controller->calcularEnvio($request);
    echo json_encode($response);
} catch (Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}