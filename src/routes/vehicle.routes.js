import { Router } from 'express';
import attributeDTO from '../dto/vehicle/attribute.dto.js';
import authorizationController from '../controllers/admin/authorization.controller.js';
import authenticationController from '../controllers/authentication.controller.js';
import {
	createBrandController,
	createColorController,
	createTypeController,
	createYearController,
	getAllBrandController,
	getAllColorController,
	getAllTypeController,
	getAllYearController,
	getBrandController,
	getColorController,
	getTypeController,
	getYearController,
	updateBrandController,
	updateColorController,
	updateTypeController,
	updateYearController,
} from '../controllers/vehicle/attributes.controller.js';

const vehicleRouter = Router();

vehicleRouter.get('/colors', getColorController);
vehicleRouter.get(
	'/color',
	authenticationController,
	authorizationController,
	getAllColorController
);
vehicleRouter.post(
	'/color',
	authenticationController,
	authorizationController,
	attributeDTO,
	createColorController
);
vehicleRouter.put(
	'/color/:attribute',
	authenticationController,
	authorizationController,
	attributeDTO,
	updateColorController
);

vehicleRouter.get('/brands', getBrandController);
vehicleRouter.get(
	'/brand',
	authenticationController,
	authorizationController,
	getAllBrandController
);
vehicleRouter.post(
	'/brand',
	authenticationController,
	authorizationController,
	attributeDTO,
	createBrandController
);
vehicleRouter.put(
	'/brand/:attribute',
	authenticationController,
	authorizationController,
	attributeDTO,
	updateBrandController
);

vehicleRouter.get('/years', getYearController);
vehicleRouter.get(
	'/year',
	authenticationController,
	authorizationController,
	getAllYearController
);
vehicleRouter.post(
	'/year',
	authenticationController,
	authorizationController,
	attributeDTO,
	createYearController
);
vehicleRouter.put(
	'/year/:attribute',
	authenticationController,
	authorizationController,
	attributeDTO,
	updateYearController
);

vehicleRouter.get('/types', getTypeController);
vehicleRouter.get(
	'/type',
	authenticationController,
	authorizationController,
	getAllTypeController
);
vehicleRouter.post(
	'/type',
	authenticationController,
	authorizationController,
	attributeDTO,
	createTypeController
);
vehicleRouter.put(
	'/type/:attribute',
	authenticationController,
	authorizationController,
	attributeDTO,
	updateTypeController
);

export default vehicleRouter;
