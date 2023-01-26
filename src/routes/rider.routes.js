import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationRiderController from '../controllers/rider/authorization.controller.js';
import { createRiderInTripController } from '../controllers/trip/create.controller.js';
import { getTripRiderController } from '../controllers/trip/get.controller.js';
import { searchTripRiderController } from '../controllers/trip/search.controller.js';

const riderRouter = Router();

riderRouter.use(authenticationController, authorizationRiderController);
riderRouter.get('/trips/search', searchTripRiderController);
riderRouter.get('/trips', getTripRiderController);
riderRouter.post('/trips/create', createRiderInTripController);

export default riderRouter;
