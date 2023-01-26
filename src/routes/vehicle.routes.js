import { Router } from 'express';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import authenticationController from '../controllers/authentication.controller.js';
import {
	getVehicleController,
	getVehiclesController,
} from '../controllers/vehicle/get.controller.js';
import { updateActiveVehicleController } from '../controllers/vehicle/update.controller.js';

const vehicleRouter = Router();

vehicleRouter.use(authenticationController, authorizationAdminController);

vehicleRouter.get('/', getVehiclesController);

vehicleRouter.get('/:id', getVehicleController);

vehicleRouter.put('/active/:id', updateActiveVehicleController);

export default vehicleRouter;
