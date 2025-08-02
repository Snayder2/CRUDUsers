# Proyecto: CRUD de Usuarios con Express y PostgreSQL

Este proyecto es una API RESTful construida con **Express** y **TypeScript**, que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una base de datos PostgreSQL.

## 🚀 Tecnologías Utilizadas

- Node.js + Express
- TypeScript
- PostgreSQL
- dotenv
- pg (node-postgres)

## 📁 Estructura General del Proyecto

└── 📁src
    └── 📁common
        └── 📁config
            ├── connectionBD.ts
        └── 📁interface
            ├── commonInterface.ts
        └── 📁middleware
    └── 📁modules
        └── 📁main
            └── 📁app
                ├── index.ts
                ├── server.ts
        └── 📁users
            └── 📁app
                └── 📁controllers
                    ├── userControllers.ts
                └── 📁functions
                    ├── handleBcrypy.ts
                └── 📁interface
                    ├── userInterfce.ts
            └── 📁domain
                ├── deleteUser.service.ts
                ├── getUser.service.ts
                ├── getUserById.service.ts
                ├── setUser.service.ts
                ├── updateUser.service.ts
            └── 📁infra
                └── 📁connectors
                    ├── userConnectors.ts
                └── 📁repos
                    ├── userDAO.ts
                └── 📁routes
                    ├── user.routes.ts
    └── index.ts



## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/tu_repositorio.git

2. Instala las dependencias:  
npm install

3. Ejecuta el proyecto 
npm run dev
