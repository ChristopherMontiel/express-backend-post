# React POST

Este proyecto corresponde al backend en node js y express de  una pequeña aplicación de REACT con Redux que maneja Posteos. Los requerimientos se definen a continuación:

## Requerimientos:

## Frontend (REACT con REDUX):
[Repositorio del Frontend](https://github.com/ChristopherMontiel/react-post).  
Los Posts deben tener:  
Nombre  
Descrpición  
Buenas prácticas:  
JSON camel-case  
JS camel-case  
Ruby en snake case  
Funcionalidades aplicación web hecha con React y Redux  
Insertar posts  
Eliminar posts  
Listar posts  
Filtrar posts por nombre localmente  
## Estructura:  
Formulario  
Filtro  
Lista  

## Backend (API JSON) en Node.js y Express:
[Repositorio del Backend](https://github.com/ChristopherMontiel/express-backend-post).  
Crear posts: Deberá retornar el post creado
Eliminar posts: Deberá retornar el post eliminado
Obtener lista de posts: Deberá retornar todos los posts
BD en postgreSQL

Solo se debe llamar al endpoint que entrega la lista completa de posts una sola vez por cada vez que se cargue la vista.

## Información del Proyecto:

Version express: 4.18.1  
Archivo de configuración de base de datos se encuentra en ./config/config.js  
script de base de datos: ./bd/bd_create.sql  
Para ejecutar el proyecto se debe correr el comando `npm run start`