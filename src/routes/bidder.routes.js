import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationBidderController from '../controllers/bidder/authorization.controller.js';
import { getActivesVehiclesBidderController } from '../controllers/vehicle/get.controller.js';
import { getTripsController } from '../controllers/trip/get.controller.js';
import { disableTripController } from '../controllers/trip/disable.controller.js';
import { createTripController } from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';

const bidderRouter = Router();

bidderRouter.use(authenticationController, authorizationBidderController);

bidderRouter.get('/vehicles', getActivesVehiclesBidderController);

bidderRouter.get('/trips', getTripsController);
bidderRouter.put('/trips/:id', disableTripController);
bidderRouter.post('/trips/create', tripCreateDTO, createTripController);

export default bidderRouter;
