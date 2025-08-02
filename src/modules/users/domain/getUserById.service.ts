import { IServiceResponse } from "../../../common/interface/commonInterface";
import { UserConnectors } from "../infra/connectors/userConnectors";

const getUserById = async (id: number): Promise<IServiceResponse> => {
    if (!id) {
        throw new Error("Faltan parametros de entrada!")
    }

    const dao = new UserConnectors()
    const result = await dao.getUserById(id)
    
    if (!result.data) {
        throw new Error("Usuario no encontrado")
    }
    return result
}

export default getUserById