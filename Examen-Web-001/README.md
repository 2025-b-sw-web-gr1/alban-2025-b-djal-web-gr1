# 🏆 Examen Web 001 - API RESTful con NestJS

**Estudiante:** Dorian Joel Alban Lucas  
**Curso:** Aplicaciones Web - Semestre 2025B  
**Fecha:** 20 de Enero de 2026

---

## 📋 Descripción del Proyecto

API RESTful implementada con **NestJS**, **TypeORM** y **SQLite** que modela la relación **1 a muchos** entre **Equipos (Teams)** y **Jugadores (Players)**:

- Un equipo puede tener muchos jugadores
- Cada jugador pertenece a un único equipo

---

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **TypeORM** - ORM para TypeScript
- **SQLite** - Base de datos ligera
- **TypeScript** - Lenguaje de programación

---

## 📂 Estructura del Proyecto

```
Examen-Web-001/
├── src/
│   ├── main.ts                    # Punto de entrada
│   ├── app.module.ts              # Módulo principal
│   ├── teams/                     # Módulo de equipos
│   │   ├── team.entity.ts         # Entidad Team
│   │   ├── teams.controller.ts    # Controlador
│   │   ├── teams.service.ts       # Servicio
│   │   ├── teams.module.ts        # Módulo
│   │   └── dto/
│   │       ├── create-team.dto.ts
│   │       └── update-team.dto.ts
│   └── players/                   # Módulo de jugadores
│       ├── player.entity.ts       # Entidad Player
│       ├── players.controller.ts  # Controlador
│       ├── players.service.ts     # Servicio
│       ├── players.module.ts      # Módulo
│       └── dto/
│           ├── create-player.dto.ts
│           └── update-player.dto.ts
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

---

## 🚀 Instalación y Ejecución

### 1. Clonar e instalar dependencias

```bash
cd Examen-Web-001
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run start:dev
```

El servidor estará disponible en: **http://localhost:3000**

### 3. Ejecutar en modo producción

```bash
npm run build
npm run start:prod
```

---

## 📊 Modelo de Datos

### Entidad: Team (Equipo)

| Campo   | Tipo    | Descripción           |
|---------|---------|----------------------|
| id      | number  | ID único (autogenerado) |
| name    | string  | Nombre del equipo    |
| country | string  | País del equipo      |
| players | Player[]| Relación 1:N         |

### Entidad: Player (Jugador)

| Campo    | Tipo   | Descripción              |
|----------|--------|--------------------------|
| id       | number | ID único (autogenerado)  |
| name     | string | Nombre del jugador       |
| position | string | Posición en el campo     |
| teamId   | number | ID del equipo (FK)       |
| team     | Team   | Relación N:1             |

### Relación

```
┌─────────────┐          ┌─────────────┐
│    Team     │ 1      * │   Player    │
├─────────────┤──────────├─────────────┤
│ id          │          │ id          │
│ name        │          │ name        │
│ country     │          │ position    │
└─────────────┘          │ teamId (FK) │
                         └─────────────┘
```

---

## 🔗 Endpoints RESTful

### ⚽ Teams (Equipos)

| Método | Endpoint      | Descripción              |
|--------|---------------|--------------------------|
| GET    | /teams        | Obtener todos los equipos |
| GET    | /teams/:id    | Obtener equipo por ID    |
| POST   | /teams        | Crear nuevo equipo       |
| PUT    | /teams/:id    | Actualizar equipo        |
| DELETE | /teams/:id    | Eliminar equipo          |

### 👟 Players (Jugadores)

| Método | Endpoint            | Descripción                        |
|--------|---------------------|------------------------------------|
| GET    | /players            | Obtener todos los jugadores        |
| GET    | /players/:id        | Obtener jugador por ID             |
| GET    | /teams/:id/players  | Obtener jugadores de un equipo     |
| POST   | /players            | Crear nuevo jugador                |
| PUT    | /players/:id        | Actualizar jugador                 |
| DELETE | /players/:id        | Eliminar jugador                   |

---

## 📝 Ejemplos de Uso con cURL

### Teams (Equipos)

#### Crear un equipo
```bash
curl -X POST http://localhost:3000/teams \
  -H "Content-Type: application/json" \
  -d '{"name": "Barcelona FC", "country": "España"}'
```

#### Obtener todos los equipos
```bash
curl http://localhost:3000/teams
```

#### Obtener un equipo por ID
```bash
curl http://localhost:3000/teams/1
```

#### Actualizar un equipo
```bash
curl -X PUT http://localhost:3000/teams/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "FC Barcelona", "country": "España"}'
```

#### Eliminar un equipo
```bash
curl -X DELETE http://localhost:3000/teams/1
```

---

### Players (Jugadores)

#### Crear un jugador
```bash
curl -X POST http://localhost:3000/players \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Delantero", "teamId": 1}'
```

#### Obtener todos los jugadores
```bash
curl http://localhost:3000/players
```

#### Obtener un jugador por ID
```bash
curl http://localhost:3000/players/1
```

#### Obtener jugadores de un equipo (Relación 1:N)
```bash
curl http://localhost:3000/teams/1/players
```

#### Actualizar un jugador
```bash
curl -X PUT http://localhost:3000/players/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "Lionel Messi", "position": "Mediocampista", "teamId": 1}'
```

#### Eliminar un jugador
```bash
curl -X DELETE http://localhost:3000/players/1
```

---

## 🧪 Ejemplos con HTTPie

### Teams

```bash
# Crear equipo
http POST localhost:3000/teams name="Real Madrid" country="España"

# Obtener todos
http GET localhost:3000/teams

# Obtener por ID
http GET localhost:3000/teams/1

# Actualizar
http PUT localhost:3000/teams/1 name="Real Madrid CF" country="España"

# Eliminar
http DELETE localhost:3000/teams/1
```

### Players

```bash
# Crear jugador
http POST localhost:3000/players name="Cristiano Ronaldo" position="Delantero" teamId:=1

# Obtener todos
http GET localhost:3000/players

# Obtener por ID
http GET localhost:3000/players/1

# Obtener jugadores de un equipo
http GET localhost:3000/teams/1/players

# Actualizar
http PUT localhost:3000/players/1 name="CR7" position="Extremo" teamId:=1

# Eliminar
http DELETE localhost:3000/players/1
```

---

## 📦 Ejemplos de Request/Response

### POST /teams (Crear equipo)

**Request:**
```json
{
  "name": "Barcelona FC",
  "country": "España"
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Barcelona FC",
  "country": "España"
}
```

---

### POST /players (Crear jugador)

**Request:**
```json
{
  "name": "Lionel Messi",
  "position": "Delantero",
  "teamId": 1
}
```

**Response (201 Created):**
```json
{
  "id": 1,
  "name": "Lionel Messi",
  "position": "Delantero",
  "teamId": 1
}
```

---

### GET /teams/1/players (Jugadores de un equipo)

**Response (200 OK):**
```json
[
  {
    "id": 1,
    "name": "Lionel Messi",
    "position": "Delantero",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Barcelona FC",
      "country": "España"
    }
  },
  {
    "id": 2,
    "name": "Pedri",
    "position": "Mediocampista",
    "teamId": 1,
    "team": {
      "id": 1,
      "name": "Barcelona FC",
      "country": "España"
    }
  }
]
```

---

## ⚙️ Configuración de TypeORM

La conexión a SQLite está configurada en `app.module.ts`:

```typescript
TypeOrmModule.forRoot({
  type: 'sqlite',
  database: 'db.sqlite',
  entities: [Team, Player],
  synchronize: true, // Solo para desarrollo
})
```

⚠️ **Nota:** `synchronize: true` crea/actualiza las tablas automáticamente. NO usar en producción.

---

## 📚 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run start` | Iniciar en modo normal |
| `npm run start:dev` | Iniciar en modo desarrollo (watch) |
| `npm run start:prod` | Iniciar en modo producción |
| `npm run build` | Compilar el proyecto |
| `npm run lint` | Ejecutar linter |

---

## ✅ Criterios de Evaluación Cumplidos

- ✅ Proyecto correctamente estructurado
- ✅ Conexión a SQLite configurada y funcionando
- ✅ Entidades bien definidas con relación 1 a muchos
- ✅ Endpoints RESTful implementados:
  - ✅ Crear (POST)
  - ✅ Modificar (PUT)
  - ✅ Buscar uno (GET /:id)
  - ✅ Buscar muchos (GET)
  - ✅ Eliminar (DELETE)
  - ✅ Relación (GET /teams/:id/players)
- ✅ README claro y completo

---

## 👤 Autor

**Dorian Joel Alban Lucas**  
Aplicaciones Web - Semestre 2025B  
[GitHub Repository](https://github.com/2025-b-sw-web-gr1/alban-2025-b-djal-wen-gr1)
