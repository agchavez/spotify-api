# Spotify API 
Proyecto de prueba para el uso de Prisma con Express.js y Typescript

[Documentacion API](https://documenter.getpostman.com/view/11189605/2s93z9cNrF)
## Instalaciones globales necesarias
- [Node JS](https://nodejs.org/es/)
- [VSCode - Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)

Typescript
```bash
    npm install -g typescript
```

### Extensiones de VSCode
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

### Paquetes de NPM
- [Express](https://expressjs.com/)
- [Prisma](https://www.prisma.io/)
- [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/generating-prisma-client)
- [Express Validator](https://express-validator.github.io/docs)


## Instrucciones de instalación
<hr>

### Inciar base de datos
```bash
    docker-compose up -d
```

### Configuración de variables de entorno
```bash
    cp .env.template .env
```
crear un archivo .env con las variables de entorno en base al archivo .env.template y configurar las variables de entorno
### Instalación de dependencias
```bash
    npm install
```

### Generar el cliente de Prisma
```bash
    npx prisma generate
```
### Generar el cliente de Prisma para un schema en especifico

```bash
    npx prisma generate --schema=./prisma/tienda.prisma
```

### Ejecución
```bash
    npm run dev
```

## Comandos de Prisma
<hr>

### Generar el cliente de Prisma
```bash
    npx prisma generate
```

### Generar un nuevas migraciones de la base de datos
```bash
    npx prisma migrate dev --name <nombre de la migración>
```

### Aplicar las migraciones
```bash
    npx prisma migrate deploy
```

### Crear schema de la base de datos existente
```bash
    npx prisma db push
```

### Iniciar prisma studio
```bash
    npx prisma studio
```



## Bibliografía
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express.js](https://expressjs.com/es/)
- [ESLint](https://eslint.org/)
