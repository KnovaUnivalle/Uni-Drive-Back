import { Router } from 'express';
import bidderLoginController from '../controllers/bidder/login.controller.js';
import bidderCreateController from '../controllers/bidder/create.controller.js';
import bidderCreateDTO from '../dto/bidder/create.dto.js';
import loginDTO from '../dto/login.dto.js';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationController from '../controllers/bidder/authorization.controller.js';
import { getVehicles } from '../controllers/vehicle/get.controller.js';
import bidderExistController from '../controllers/bidder/exist.controller.js';
import vehicleExistController from '../controllers/vehicle/exist.controller.js';
import vehicleCreateController from '../controllers/vehicle/create.controller.js';
import { getTrips } from '../controllers/trip/get.controller.js';
import { disableTrip } from '../controllers/trip/disable.controller.js';

const bidderRouter = Router();

bidderRouter.post('/login', loginDTO, bidderLoginController);
bidderRouter.post(
	'/create',
	bidderCreateDTO,
	bidderExistController,
	vehicleExistController,
	bidderCreateController,
	vehicleCreateController
);
bidderRouter.get(
	'/vehicles',
	authenticationController,
	authorizationController,
	getVehicles
);
bidderRouter.get(
	'/trips',
	authenticationController,
	authorizationController,
	getTrips
);
bidderRouter.put(
	'/trips/:id',
	authenticationController,
	authorizationController,
	disableTrip
);

export default bidderRouter;
