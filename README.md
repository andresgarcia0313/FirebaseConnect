# Firebase Database Service

Este proyecto proporciona un servicio simple para interactuar con Firebase Realtime Database usando Node.js. Permite agregar, obtener, actualizar y eliminar datos de una base de datos en tiempo real.
Firebase Realtime Database es un almacenamiento NoSQL basado en JSON. Los datos se organizan en nodos, donde cada nodo puede contener objetos y listas. A diferencia de SQL, no hay esquemas fijos; los datos son flexibles y se pueden actualizar en tiempo real, facilitando la sincronización instantánea, sin embargo para facilidad conceptual el código lo dejo para manejo como si fueran tablas sin embargo también se puede usar como nodos anidados como una estructura json

## Requisitos

- Node.js (v14 o superior)
- Firebase Admin SDK

## Instalación

0. Crear la base de datos de Realtime Database en firebase y obtener las credenciales

    1. Crea el proyecto en <https://console.firebase.google.com/>
    2. Busca la opción de Realtime Database en toda la consola y dentro de esta creala con modo de inicio de pruebas y copia la ruta de url de la conexión de base de datos.
    3. Busca "Configuración del proyecto" (el ícono de engranaje).
    En la sección "Cuentas de servicio", haz clic en "Generar nueva clave privada".
    Esto descargará un archivo JSON con tus credenciales.

1. Descarga este repositorio y con terminal abre la ubicación del mismo:

   ```bash
   cd ..
   ```

2. Instala las dependencias:

   ```bash
   npm install firebase-admin
   ```

3. Descarga tu archivo de clave privada de Firebase Admin SDK y colócalo en la raíz del proyecto, renombrándolo a `fir-connect-ca799-firebase-adminsdk-ooqsh-b6afc833c2.json`.

## Uso

1. Abre `main.js` y ajusta la configuración de `databaseURL` según tu proyecto de Firebase.
2. Ejecuta el archivo:

   ```bash
   node main.js
   ```

## Métodos disponibles

- `addData(tabla, data)`: Agrega un nuevo registro a la tabla o nodo especificada.
- `getData(tabla)`: Recupera todos los registros de la tabla o nodo especificada.
- `updateData(tabla, id, data)`: Actualiza un registro específico de la tabla.
- `deleteData(tabla, id)`: Elimina un registro específico de la tabla.
- `getDataById(tabla, id)`: Recupera un registro específico por su ID.

## Contribuciones

Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, por favor crea un pull request o abre un issue.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para preguntas o sugerencias, contacta a [andresgarcia0313@gmail.com](mailto:andresgarcia0313@gmail.com).
