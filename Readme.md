# Ejercicio de Prueba de Carga - Login API con K6

## Descripción del ejercicio

Este ejercicio consiste en realizar una prueba de carga sobre un servicio de autenticación (login API) utilizando K6 para evaluar el comportamiento del sistema bajo condiciones de concurrencia, midiendo el tiempo de respuesta, la tasa de error y la capacidad de procesamiento en términos de TPS (transactions per second).

## Tecnologías utilizadas

- K6 v1.7.1
- Windows 10 / Windows 11
- JavaScript (lenguaje utilizado para el script de pruebas)
- FakeStore API (servicio utilizado para la prueba)

## Endpoint utilizado

Método: POST  
URL del servicio:

https://fakestoreapi.com/auth/login

## Instrucciones de ejecución

1. Ejecutar la prueba de carga
    Ejecutar el script principal con el siguiente comando: k6 run script.js
2. Configuración de la prueba
    El script ejecuta una prueba de carga con las siguientes características:
    - Incremento progresivo de usuarios hasta 20 TPS
    - Duración aproximada de 1 minuto y 50 segundos
    - Uso de datos desde archivo CSV
    - Validación de respuestas del servicio