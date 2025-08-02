import validator from 'validator';
import { IUser } from '../app/interface/userInterfce';
import { IServiceResponse } from '../../../common/interface/commonInterface';
import { UserConnectors } from '../infra/connectors/userConnectors';

export class UpdateUser {
  private objData: IUser;
  private objResult!: IServiceResponse;

  constructor(data: IUser) {
    this.objData = data;
  }

  public async main(): Promise<IServiceResponse> {
    await this.validations()
    await this.updateUser();

    return this.objResult;
  }

  private async validations(): Promise<void> {
    const { email, id } = this.objData;

    if (!email || !id) {
      throw new Error('Faltaban parámetros de entrada');
    }

    if (!validator.isEmail(email)) {
      throw new Error('El email contiene un formato inválido');
    }
  }

  private async updateUser(): Promise<void> {
    const dao = new UserConnectors();

    const query = await dao.updateUser({
      ...this.objData,
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
