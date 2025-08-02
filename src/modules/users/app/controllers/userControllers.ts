import { Request, Response } from "express";
import { IUser } from "../interface/userInterfce";
import { SetUser } from "../../domain/setUser.service";
import getUser from "../../domain/getUser.service"
import getUserById from "../../domain/getUserById.service";
import { DeleteUser } from "../../domain/deleteUser.service";
import { UpdateUser } from "../../domain/updateuser.service";

export class UserControllers {
  async setUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = (req.body as IUser)
      const service = new SetUser(data)

      const query = await service.main();

      if (query.error) {
        throw new Error(query.msg);
      }

      return res.status(200).json(query);
    } catch (error: any) {
      const result = {
        error: true,
        msg: error.message,
      };
      return res.status(400).json(result);
    }
  }

  async getUser(req: Request, res: Response): Promise<Response> {
    try {
      const query = await getUser();

      if (query.error) {
        throw new Error(query.msg);
      }

      return res.status(200).json(query);
    } catch (error: any) {
      const result = {
        error: true,
        msg: error.message,
      };
      return res.status(400).json(result);
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const id = (req.query as any).id;

      const query = await getUserById(id);

      if (query.error) {
        throw new Error(query.msg);
      }

      return res.status(200).json(query);
    } catch (error: any) {
      const result = {
        error: true,
        msg: error.message,
      };
      return res.status(400).json(result);
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = (req.body as IUser)
      const service = new UpdateUser(data)

      const query = await service.main();

      if (query.error) {
        throw new Error(query.msg);
      }

      return res.status(200).json(query);
    } catch (error: any) {
      const result = {
        error: true,
        msg: error.message,
      };
      return res.status(400).json(result);
    }
  }
  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      const data = (req.query as any)

      const service = new DeleteUser(data)
      const query = await service.main();

      if (query.error) {
        throw new Error(query.msg);
      }

      return res.status(200).json(query);
    } catch (error: any) {
      const result = {
        error: true,
        msg: error.message,
      };
      return res.status(400).json(result);
    }
  }
}
