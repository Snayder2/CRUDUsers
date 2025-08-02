import validator from 'validator';
import { IUser } from '../app/interface/userInterfce';
import { IServiceResponse } from '../../../common/interface/commonInterface';
import { UserConnectors } from '../infra/connectors/userConnectors';

export class DeleteUser {
  private objData: IUser;
  private objResult!: IServiceResponse;

  constructor(data: IUser) {
    this.objData = data;
  }

  public async main(): Promise<IServiceResponse> {
    await this.validations();
    await this.deleteUser();

    return this.objResult;
  }

  private async validations(): Promise<void> {
    const { id } = this.objData;
    if (!id) {
      throw new Error('Faltaban parámetros de entrada');
    }
  }

  private async deleteUser(): Promise<void> {
    const dao = new UserConnectors();

    const query = await dao.deleteUser(this.objData.id as number);

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
