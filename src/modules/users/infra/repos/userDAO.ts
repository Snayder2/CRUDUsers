import { Client } from 'pg';
import connection from '../../../../common/config/connectionBD';
import { IUser } from '../../app/interface/userInterfce';
import { IServiceResponse } from '../../../../common/interface/commonInterface';

export class UserDAO {
	public async setUser(data: IUser): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
        	INSERT INTO public."tbl_Users" (
        	  "name",
        	  "lastName",
        	  "email",
        	  "identification",
        	  "pass"
        	) VALUES ($1, $2, $3, $4, $5)
        	RETURNING *
		`;

			const values = [
				data.name,
				data.lastName,
				data.email,
				data.identification,
				data.pass,
			];

			const response = await client.query(query, values);
			await client.end();

			return {
				error: false,
				msg: 'El usuario se registró correctamente.',
				data: response.rows[0],
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método setUser de la clase UserDAO',
			};
		}
	}

	public async getUser(): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
            SELECT *
            FROM public."tbl_Users"
        	`;

			const response = await client.query(query);
			await client.end();

			return {
				error: false,
				data: response.rows ?? [],
				msg: 'El usuario se ha consultado correctamente.',
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método getUser de la clase UserDAO',
			};
		}
	}

	public async getUserById(id: number): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
    		SELECT *
    		FROM public."tbl_Users"
    		WHERE ("id" = $1)
		`;

			const values = [id]
			const response = await client.query(query, values);
			await client.end();

			return {
				error: false,
				data: response.rows[0],
				msg: 'El usuario se ha consultado correctamente.',
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método getUserById de la clase UserDAO',
			};
		}
	}

	public async getUserByEmail(email: string): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
    		SELECT *
    		FROM public."tbl_Users"
    		WHERE ("email" = $1)
		`;

			const values = [email]
			const response = await client.query(query, values);
			await client.end();

			return {
				error: false,
				data: response.rows[0],
				msg: 'El usuario se ha consultado correctamente.',
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método getUserByEmail de la clase UserDAO',
			};
		}
	}

	public async updateUser(data: IUser): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
        		UPDATE public."tbl_Users"
				SET 
				    name = COALESCE($2, name),
				    "lastName" = COALESCE($3, "lastName"),
				    email = COALESCE($4, email),
				    identification = COALESCE($5, identification)
					
				WHERE "id" = $1 
				RETURNING *;
        	`;

			const values = [
				data.id,
				data.name,
				data.lastName,
				data.email,
				data.identification,
			];
			const response = await client.query(query, values);
			await client.end();

			return {
				error: false,
				data: response.rows[0],
				msg: 'El usuario se ha actualizado correctamente.',
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método updateUser de la clase UserDAO',
			};
		}
	}

	public async deleteUser(id: number): Promise<IServiceResponse> {
		try {
			const client = new Client(connection);
			await client.connect();

			const query = `
        		DELETE
        		FROM public."tbl_Users"
        		WHERE ("id" = $1)
        	`;
			const values = [id]
			const response = await client.query(query, values);
			await client.end();

			return {
				error: false,
				msg: 'El usuario se ha eliminado correctamente.',
				data: response.rows[0],
			};
		} catch (error: any) {
			return {
				error: true,
				msg: error.message || 'Error en el método deleteUser de la clase UserDAO',
			};
		}
	}
}
