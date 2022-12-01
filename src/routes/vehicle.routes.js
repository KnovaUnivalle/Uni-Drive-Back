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

vehicleRouter.get('/color', getColorController);
vehicleRouter.get(
	'/allColor',
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

vehicleRouter.get('/brand', getBrandController);
vehicleRouter.get(
	'/allBrand',
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

vehicleRouter.get('/year', getYearController);
vehicleRouter.get(
	'/allYear',
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

vehicleRouter.get('/type', getTypeController);
vehicleRouter.get(
	'/allType',
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
