## Express.js Prisma Typescript 
Proyecto de prueba para el uso de Prisma con Express.js y Typescript

## Instalaciones globales necesarias
- [Node JS](https://nodejs.org/es/)
- [VSCode - Visual Studio Code](https://code.visualstudio.com/)
- [Docker](https://www.docker.com/)

Typescript
```bash
    npm install -g typescript
```

## Extensiones de VSCode
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [TypeScript importer](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)
- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)

## Inciar base de datos
```bash
    docker-compose up -d
```

## Instalación de dependencias
```bash
    npm install
```

## Ejecución
```bash
    npm run dev
```

## Comandos de Prisma

### Generar el cliente de Prisma
```bash
    npx prisma generate
```

### Generar un nuevo modelo
```bash
    npx prisma migrate dev --name <nombre de la migración>
```

### Aplicar las migraciones
```bash
    npx prisma migrate dev
```

### Crear schema de la base de datos
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
