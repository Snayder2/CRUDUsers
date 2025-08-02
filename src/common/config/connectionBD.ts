import dotenv from 'dotenv-flow';
dotenv.config();

interface PgConnectionConfig {
  host: string | undefined;
  database: string | undefined;
  port: number;
  user: string | undefined;
  password: string | undefined;
}

const connection: PgConnectionConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

export default connection;
