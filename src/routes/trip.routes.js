import { Router } from 'express';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';
import bidderTokenController from '../controllers/bidder/auth.controller.js';

const tripRouter = Router();

tripRouter.post(
	'/create',
	bidderTokenController,
	tripCreateDTO,
	createTripController
);

export default tripRouter;
