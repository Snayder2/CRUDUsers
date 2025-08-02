import { Router, Request, Response } from 'express';
import { UserControllers } from '../../app/controllers/userControllers';

const routes = Router();

routes.post('/v1/user/setUser', async (req: Request, res: Response): Promise<void> => {
  const controllerMain = new UserControllers();
  await controllerMain.setUser(req, res);
});

routes.get('/v1/user/getuser', async (req: Request, res: Response): Promise<void> => {
  const controllerMain = new UserControllers();
  await controllerMain.getUser(req, res);
});

routes.get('/v1/user/getUserById', async (req: Request, res: Response): Promise<void> => {
  const controllerMain = new UserControllers();
  await controllerMain.getUserById(req, res);
});

routes.put('/v1/user/updateUser', async (req: Request, res: Response): Promise<void> => {
  const controllerMain = new UserControllers();
  await controllerMain.updateUser(req, res);
});

routes.delete('/v1/user/deleteUser', async (req: Request, res: Response): Promise<void> => {
  const controllerMain = new UserControllers();
  await controllerMain.deleteUser(req, res);
});

export default routes;
