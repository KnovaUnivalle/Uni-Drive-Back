import { Router } from 'express';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationBidderController from '../controllers/bidder/authorization.controller.js';
import authorizationRiderController from '../controllers/rider/authorization.controller.js';
import { searchTripRiderController } from '../controllers/trip/search.controller.js';

const tripRouter = Router();

tripRouter.post(
	'/create',
	authenticationController,
	authorizationBidderController,
	tripCreateDTO,
	createTripController
);

tripRouter.get(
	'/search',
	authenticationController,
	authorizationRiderController,
	searchTripRiderController
);

export default tripRouter;
