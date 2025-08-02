import dotenv from 'dotenv-flow';
import { Client } from 'pg';
import http, { Server } from 'http';
import app from './index'; // Ajusta la ruta según tu estructura
import connection from '../../../common/config/connectionBD';

export class ClsServer {
  private objServer!: Server;

  public async main(): Promise<void> {
    await this.server();
  }

  private async server(): Promise<void> {
    try {
      const port = app.get('port') || 3000;
      console.log(app.get('port'));
      this.objServer = http.createServer(app).listen(port);

      const client = new Client(connection);
      await client.connect().then(() => {
        console.log('Conexión con la BD exitosa.');
      });

      console.log(`🚀 Servidor corriendo en el puerto: ${port}`);
    } catch (error) {
      console.error('Error al iniciar el servidor:', error);
    }
  }
}
