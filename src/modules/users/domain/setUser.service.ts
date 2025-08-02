import validator from 'validator';
import { IUser } from '../app/interface/userInterfce';
import { IServiceResponse } from '../../../common/interface/commonInterface';
import { encrypt } from '../app/functions/handleBcrypy';
import { UserConnectors } from '../infra/connectors/userConnectors';

export class SetUser {
  private objData: IUser;
  private objResult!: IServiceResponse;
  private hashPass!: string;

  constructor(data: IUser) {
    this.objData = data;
  }

  public async main(): Promise<IServiceResponse> {
    await this.validations();
    await this.encryptPass();
    await this.setUser();

    return this.objResult;
  }

  private async validations(): Promise<void> {
    const dao = new UserConnectors()
    const { name, lastName, email, pass, identification } = this.objData;

    if (!email || !pass || !name || !lastName || !identification) {
      throw new Error('Faltaban parámetros de entrada');
    }

    if (!validator.isEmail(email)) {
      throw new Error('El email contiene un formato inválido');
    }

    const objUser = await dao.getUserByEmail(email)

    if (objUser.data.email === email) {
      throw new Error ("El usuario ya existe.")
    }

  }

  private async encryptPass(): Promise<void> {
    this.hashPass = await encrypt(this.objData.pass);
  }

  private async setUser(): Promise<void> {
    const dao = new UserConnectors();

    const query = await dao.setUser({
      ...this.objData,
      pass: this.hashPass,
    });

    if (query.error) {
      throw new Error(query.msg);
    }

    this.objResult = {
      error: false,
      data: query.data,
      msg: query.msg
    };
  }
}
