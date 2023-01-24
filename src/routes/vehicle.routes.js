import { Router } from 'express';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import authenticationController from '../controllers/authentication.controller.js';
import {
	getVehicleController,
	getVehiclesController,
} from '../controllers/vehicle/get.controller.js';
import { updateActiveVehicleController } from '../controllers/vehicle/update.controller.js';

const vehicleRouter = Router();

vehicleRouter.get(
	'/',
	authenticationController,
	authorizationAdminController,
	getVehiclesController
);

vehicleRouter.get(
	'/:id',
	authenticationController,
	authorizationAdminController,
	getVehicleController
);

vehicleRouter.put(
	'/active/:id',
	authenticationController,
	authorizationAdminController,
	updateActiveVehicleController
);

export default vehicleRouter;
