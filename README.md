# Tarea2.1_Diseño_Digital_IS711 Darlan Josue Perdomo #20222000729

## Instrucciones para instalar las dependencias
Para poder tener las dependencias se requiere que en la terminal se ejecute el siguiente codigo: npm install
una vez hecho esto revisar que se cuenta con la sigiente carpeta y archivo: node_modules y el archivo package-lock.json
al confirmar que se cuenta con estos archivos ya se puede pasar a la ejecucion de la API

## Instrucciones para la ejecucion de la API
Para poder ejecutar la API se debe de colocar en la terminal el siguiente escript: npm run dev
con esto ya el servidor de node ya se encuentra en ejecucion

## Breve descripcion de las rutas
La API cuenta con 5 rutas y una adicional que dan un total de 6 y son las siguentes:
1. GET /productos, esta ruta retorna una lista con todos los productos que estan almacenados en la base de datos que en este caso es un .json
2. GET /productos/:id, esta ruta retorna la informacion del producto almacenado en la base de datos con el id especificado
3. POST /productos, esta ruta permite crear un producto en la base de datos, asignandole un id unico y tambien la fecha y hora de creacion
4. PUT /productos/:id, esta ruta permite modificar los datos del producto existente con el id especifico
5. DELETE /productos/:id, esta ruta permite eliminar el producto con el id especifico
6. GET /productos/disponiles, esta ruta devuelve unicamente los productos que estan marcados como disponibles (disponibles: true)
