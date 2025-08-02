import { IServiceResponse } from "../../../common/interface/commonInterface";
import { UserConnectors } from "../infra/connectors/userConnectors";

const getUser = async (): Promise<IServiceResponse> => {
    const dao = new UserConnectors()
    const result = await dao.getUser()
    return result
}

export default getUser