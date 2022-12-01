import { Router } from 'express';
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
import attributeDTO from '../dto/vehicle/attribute.dto.js';

const vehicleRouter = Router();

vehicleRouter.get('/color', getColorController);
vehicleRouter.get('/allColor', authenticationController, getAllColorController);
vehicleRouter.post(
	'/color',
	authenticationController,
	attributeDTO,
	createColorController
);
vehicleRouter.put(
	'/color/:attribute',
	authenticationController,
	attributeDTO,
	updateColorController
);

vehicleRouter.get('/brand', getBrandController);
vehicleRouter.get('/allBrand', authenticationController, getAllBrandController);
vehicleRouter.post(
	'/brand',
	authenticationController,
	attributeDTO,
	createBrandController
);
vehicleRouter.put(
	'/brand/:attribute',
	authenticationController,
	attributeDTO,
	updateBrandController
);

vehicleRouter.get('/year', getYearController);
vehicleRouter.get('/allYear', authenticationController, getAllYearController);
vehicleRouter.post(
	'/year',
	authenticationController,
	attributeDTO,
	createYearController
);
vehicleRouter.put(
	'/year/:attribute',
	authenticationController,
	attributeDTO,
	updateYearController
);

vehicleRouter.get('/type', getTypeController);
vehicleRouter.get('/allType', authenticationController, getAllTypeController);
vehicleRouter.post(
	'/type',
	authenticationController,
	attributeDTO,
	createTypeController
);
vehicleRouter.put(
	'/type/:attribute',
	authenticationController,
	attributeDTO,
	updateTypeController
);

export default vehicleRouter;
