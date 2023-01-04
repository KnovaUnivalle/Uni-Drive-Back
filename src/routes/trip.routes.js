import { Router } from 'express';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationController from '../controllers/bidder/authorization.controller.js';

const tripRouter = Router();

tripRouter.post(
	'/create',
	authenticationController,
	authorizationController,
	tripCreateDTO,
	createTripController
);

export default tripRouter;
