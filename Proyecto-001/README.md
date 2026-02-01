# Proyecto-001: API de Equipos y Jugadores con Swagger

API RESTful desarrollada con **NestJS**, **TypeORM** y **SQLite**, documentada con **Swagger (OpenAPI)**.

## 📋 Descripción

Este proyecto implementa una API para gestionar equipos deportivos y sus jugadores, con una relación **1:N** (un equipo tiene muchos jugadores). Toda la API está documentada automáticamente con Swagger.

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite** - Base de datos ligera
- **Swagger** - Documentación automática de API

## 📦 Instalación

```bash
# Clonar el repositorio e ir a la carpeta del proyecto
cd Proyecto-001

# Instalar dependencias
npm install
```

## 🚀 Ejecución

```bash
# Modo desarrollo (con hot-reload)
npm run start:dev

# Modo producción
npm run start:prod
```

El servidor se ejecutará en: `http://localhost:3000`

## 📚 Documentación Swagger

Una vez que el servidor esté corriendo, accede a la documentación interactiva:

🔗 **http://localhost:3000/api**

Desde Swagger UI podrás:
- Ver todos los endpoints disponibles
- Probar las operaciones directamente
- Ver los esquemas de datos (DTOs)
- Ver ejemplos de request/response

## 🔗 Endpoints Documentados

### Teams (Equipos)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/teams` | Obtener todos los equipos |
| `GET` | `/teams/:id` | Obtener un equipo por ID |
| `POST` | `/teams` | Crear un nuevo equipo |
| `PUT` | `/teams/:id` | Actualizar un equipo |
| `DELETE` | `/teams/:id` | Eliminar un equipo |

### Players (Jugadores)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| `GET` | `/players` | Obtener todos los jugadores |
| `GET` | `/players/:id` | Obtener un jugador por ID |
| `POST` | `/players` | Crear un nuevo jugador |
| `PUT` | `/players/:id` | Actualizar un jugador |
| `DELETE` | `/players/:id` | Eliminar un jugador |
| `GET` | `/teams/:id/players` | Obtener jugadores de un equipo |

## 📝 Ejemplos de Uso

### Crear un equipo

```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Barcelona FC", "country": "España"}'
```

### Crear un jugador

```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Delantero", "teamId": 1}'
```

### Obtener jugadores de un equipo

```bash
curl http://localhost:3000/teams/1/players
```

## 📂 Estructura del Proyecto

```
Proyecto-001/
├── src/
│   ├── main.ts                 # Configuración de Swagger
│   ├── app.module.ts           # Módulo principal
│   ├── teams/
│   │   ├── team.entity.ts      # Entidad Team con @ApiProperty
│   │   ├── teams.controller.ts # Controller con @ApiTags, @ApiOperation, @ApiResponse
│   │   ├── teams.service.ts    # Lógica de negocio
│   │   ├── teams.module.ts     # Módulo de teams
│   │   └── dto/
│   │       ├── create-team.dto.ts    # DTO con @ApiProperty
│   │       └── update-team.dto.ts    # DTO con @ApiProperty
│   └── players/
│       ├── player.entity.ts    # Entidad Player con @ApiProperty
│       ├── players.controller.ts # Controller documentado
│       ├── players.service.ts  # Lógica de negocio
│       ├── players.module.ts   # Módulo de players
│       └── dto/
│           ├── create-player.dto.ts  # DTO con @ApiProperty
│           └── update-player.dto.ts  # DTO con @ApiProperty
├── package.json
├── tsconfig.json
└── README.md
```

## 🏷️ Decoradores Swagger Utilizados

### En Controllers
- `@ApiTags('nombre')` - Agrupa endpoints por categoría
- `@ApiOperation({ summary, description })` - Describe la operación
- `@ApiResponse({ status, description, type })` - Documenta respuestas
- `@ApiParam({ name, type, description })` - Documenta parámetros de ruta
- `@ApiBody({ type, description })` - Documenta el cuerpo de la petición

### En DTOs y Entidades
- `@ApiProperty({ example, description })` - Documenta propiedades

## 📄 Licencia

MIT
