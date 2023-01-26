import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationRiderController from '../controllers/rider/authorization.controller.js';
import { searchTripRiderController } from '../controllers/trip/search.controller.js';

const riderRouter = Router();

riderRouter.use(authenticationController, authorizationRiderController);

tripRouter.get('/search', searchTripRiderController);

export default riderRouter;
