# API de Gestión de Entrenadores Pokémon

## Descripción

Este proyecto proporciona una API para gestionar entrenadores Pokémon. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos de entrenadores, así como descargar la lista de entrenadores en formato CSV. El backend está desarrollado utilizando Node.js, Express y MongoDB.

## Características

- **Crear Entrenador**: Agrega un nuevo entrenador a la base de datos.
- **Leer Entrenadores**: Obtiene la lista completa de entrenadores o los detalles de un entrenador específico por ID.
- **Actualizar Entrenador**: Modifica los datos de un entrenador existente.
- **Eliminar Entrenador**: Elimina un entrenador de la base de datos.
- **Descargar CSV**: Permite descargar la lista de entrenadores en formato CSV.

## Estructura del Proyecto

```plaintext
.
├── controllers
│   └── trainersController.js
├── models
│   └── Trainer.schema.js
├── routes
│   └── trainers.js
├── DB
│   └── dbconnection.js
├── .env
├── main.js
├── package.json
└── README.md
```

## Requisitos

- Node.js (versión recomendada: 14.x o superior)
- npm (versión recomendada: 6.x o superior)
- MongoDB (instalado y en ejecución)

 **Dependencias**:
   - express: ^4.19.2
   - axios: ^1.7.2
   - cors: ^2.8.5
   - mongoose: ^8.4.0
   - json2csv: ^6.0.0-alpha.2

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/eduardoLOEZ/Trainers-Backend.git

cd Trainers-Backend

npm install

```
## Iniciar el servidor
```bash
node src/main.js

```


[(https://pokedex-backend-ooi4.onrender.com)
