import { Router } from 'express';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';
import authTokenController from '../controllers/auth.controller.js';
import attributeDTO from '../dto/vehicle/attribute.dto.js';
import {
	createCityController,
	getAllCityController,
	getCityController,
	updateCityController,
} from '../controllers/trip/city.controller.js';

const tripRouter = Router();

tripRouter.post(
	'/create',
	authTokenController,
	tripCreateDTO,
	createTripController
);

tripRouter.get('/city', getCityController);
tripRouter.get('/allCity', authTokenController, getAllCityController);
tripRouter.post(
	'/city',
	authTokenController,
	attributeDTO,
	createCityController
);
tripRouter.put(
	'/city/:city',
	authTokenController,
	attributeDTO,
	updateCityController
);
export default tripRouter;
