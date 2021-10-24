import logger from '@infraestructure/middlewares/logger';
import { server } from '@shared/config';

import express from './app';

express.app.listen(server.port, () => {
  logger.info('Server running', {
    port: server.port,
    mode: server.env,
  });
});
