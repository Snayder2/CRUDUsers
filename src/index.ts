import { ClsServer } from '../src/modules/main/app/server';

const init = (): void => {
  const server = new ClsServer();
  server.main();
};

init();

