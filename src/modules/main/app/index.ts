import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression'
import morgan from 'morgan'
import dotenv from 'dotenv';

import routesUser from '../../users/infra/routes/user.routes';

// Cargar variables de entorno
dotenv.config();

const app: Application = express();
//Puerto
app.set("port", process.env.PORT);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan(("dev")))
app.use(helmet())
app.use(compression({level: 9}))

// Rutas de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.send('¡Servidor Express + TypeScript corriendo!');
});

app.use("/usercrud/api",routesUser)

// Manejo de rutas no encontradas
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});



export default app

