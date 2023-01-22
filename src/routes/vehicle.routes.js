import { Router } from 'express';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import authenticationController from '../controllers/authentication.controller.js';
import { getVehicles } from '../controllers/vehicle/get.controller.js';

const vehicleRouter = Router();

vehicleRouter.get(
	'/',
	authenticationController,
	authorizationAdminController,
	getVehicles
);

export default vehicleRouter;
