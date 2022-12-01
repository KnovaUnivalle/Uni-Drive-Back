import { Router } from 'express';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationController from '../controllers/admin/authorization.controller.js';
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
	authenticationController,
	tripCreateDTO,
	createTripController
);

tripRouter.get('/city', getCityController);
tripRouter.get(
	'/allCity',
	authenticationController,
	authorizationController,
	getAllCityController
);
tripRouter.post(
	'/city',
	authenticationController,
	authorizationController,
	attributeDTO,
	createCityController
);
tripRouter.put(
	'/city/:city',
	authenticationController,
	authorizationController,
	attributeDTO,
	updateCityController
);
export default tripRouter;
