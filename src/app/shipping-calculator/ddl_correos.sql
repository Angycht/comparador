CREATE DATABASE IF NOT EXISTS tarifas_envio;
USE tarifas_envio;

CREATE TABLE paqpremium (
    id INT AUTO_INCREMENT PRIMARY KEY,
    peso VARCHAR(50),
    zona1 DECIMAL(5,2),
    zona2 DECIMAL(5,2),
    zona3 DECIMAL(5,2),
    zona3_plus DECIMAL(5,2),
    zona4 DECIMAL(5,2),
    zona5 DECIMAL(5,2),
    zona6 DECIMAL(5,2),
    zona7 DECIMAL(5,2),
    oficina_zona1 DECIMAL(5,2),
    oficina_zona2 DECIMAL(5,2),
    oficina_zona3 DECIMAL(5,2),
    oficina_zona3_plus DECIMAL(5,2),
    oficina_zona4 DECIMAL(5,2),
    oficina_zona5 DECIMAL(5,2),
    oficina_zona6 DECIMAL(5,2)
);

CREATE TABLE paqestandar (
    id INT AUTO_INCREMENT PRIMARY KEY,
    peso VARCHAR(50),
    zona1 DECIMAL(5,2),
    zona2 DECIMAL(5,2),
    zona3 DECIMAL(5,2),
    zona3_plus DECIMAL(5,2),
    zona4 DECIMAL(5,2),
    zona5 DECIMAL(5,2),
    zona6 DECIMAL(5,2),
    zona7 DECIMAL(5,2),
    oficina_zona1 DECIMAL(5,2),
    oficina_zona2 DECIMAL(5,2),
    oficina_zona3 DECIMAL(5,2),
    oficina_zona3_plus DECIMAL(5,2),
    oficina_zona4 DECIMAL(5,2),
    oficina_zona5 DECIMAL(5,2),
    oficina_zona6 DECIMAL(5,2)
);

CREATE TABLE paqligero (
    id INT AUTO_INCREMENT PRIMARY KEY,
    peso VARCHAR(50),
    zona1 DECIMAL(5,2),
    zona2 DECIMAL(5,2),
    zona3 DECIMAL(5,2),
    zona3_plus DECIMAL(5,2),
    zona4 DECIMAL(5,2),
    zona5 DECIMAL(5,2),
    zona6 DECIMAL(5,2)
);

CREATE TABLE devolucion_paqueteria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    peso VARCHAR(50),
    zona1 DECIMAL(5,2),
    zona2 DECIMAL(5,2),
    zona3 DECIMAL(5,2),
    zona3_plus DECIMAL(5,2),
    zona4 DECIMAL(5,2),
    zona5 DECIMAL(5,2),
    zona6 DECIMAL(5,2),
    zona7 DECIMAL(5,2)
);