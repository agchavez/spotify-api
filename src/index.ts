import express from 'express';
import donenv from 'dotenv';
import usuarioRouter from './router/usuario';
import cancionesRouter from './router/cancion';

donenv.config();

const servidor = express();

const PORT = process.env.PORT || 3000;

servidor.use(express.json());

// Rutas
servidor.use('/api/usuario', usuarioRouter);
servidor.use('/api/cancion', cancionesRouter);

// Inicializar el servidor 
servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});