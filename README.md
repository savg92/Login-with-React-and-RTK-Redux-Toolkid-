# Login APP Using RTK (Redux Toolkid)
    Esté proyecto plantea la creación de un sistema de gestion de clientes/contactos para una empresa. <br>
    Deberás poner en funcionamiento las partes necesarias para montar una REST API que permita realizar altas, bajas, modificaciones y obtención de información sobre una estructura de datos que podría consumir un cliente.


## Instrucciones
    Instrucciones que permitirán la utilización de una copia de los archivos de forma local en tu computadora.

### Requisitos basicos
- Tener instalado NodeJS.

### Instalacion
- Instalar las dependencias. Ejecutando:
  ```
  npm install
  ```
- Ejecuta el siguiente comando para iniciar el servidor node del proyecto
  ```
  npm run dev

## Documentación
La documentación de la API puede encontrarse en el archivo **dataWarehous.yaml** presente en el directorio raíz del repositorio.
Para mejor visualización, puedes ingresar a [swagger](https://editor.swagger.io/#).

Tambien se agregó el archivo **dataWarehouse.postman_collection.json** en el directorio raíz del repositorio para ser importado en POSTMAN; este ya contiene todas las rutas de la API.

Para iniciar las prubas de la API, se recomienda iniciar usando:
- El usuario ***ADMIN***.<br>
  ***email:*** admin@admin.com <br>
  ***password:*** 123

### Endpoints
La url base es 
127.0.0.1:5173

La APP cuenta con los siguientes endpoints:
- /login
<br>(Los siguientes endpoints requieren del inicio de sesion, otorgado en el login)
- /user

## Construido con

Herramientas y/o paquetes usados en el proyecto:

- [NodeJS](https://nodejs.org/en/)
