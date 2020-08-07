import { Router } from 'express'

import ClassesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionsController'

const routes = Router();

routes.get('/classes', ClassesController.index);
routes.post('/classes', ClassesController.create);
routes.get('/connection', ConnectionController.index);
routes.post('/connection', ConnectionController.create);

export default routes;
