import { IUser } from '../../app/interface/userInterfce';
import { UserDAO } from '../repos/userDAO'; // Asegúrate que la clase se exporta correctamente

export class UserConnectors {
    public async setUser(data: IUser): Promise<any> {
        const dao = new UserDAO();
        return await dao.setUser(data);
    }

    public async getUser(): Promise<any> {
        const dao = new UserDAO();
        return await dao.getUser();
    }

    public async getUserById(id: number): Promise<any> {
        const dao = new UserDAO();
        return await dao.getUserById(id);
    }

    public async getUserByEmail(email: string): Promise<any> {
        const dao = new UserDAO();
        return await dao.getUserByEmail(email);
    }

    public async updateUser(data: IUser): Promise<any> {
        const dao = new UserDAO();
        return await dao.updateUser(data);
    }

    public async deleteUser(id: number): Promise<any> {
        const dao = new UserDAO();
        return await dao.deleteUser(id);
    }

}
