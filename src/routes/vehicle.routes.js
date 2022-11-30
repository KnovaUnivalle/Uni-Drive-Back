import { Router } from 'express';
import authTokenController from '../controllers/auth.controller.js';
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
vehicleRouter.get('/allColor', getAllColorController);
vehicleRouter.post(
	'/color',
	authTokenController,
	attributeDTO,
	createColorController
);
vehicleRouter.put(
	'/color/:attribute',
	authTokenController,
	attributeDTO,
	updateColorController
);

vehicleRouter.get('/brand', getBrandController);
vehicleRouter.get('/allBrand', getAllBrandController);
vehicleRouter.post(
	'/brand',
	authTokenController,
	attributeDTO,
	createBrandController
);
vehicleRouter.put(
	'/brand/:attribute',
	authTokenController,
	attributeDTO,
	updateBrandController
);

vehicleRouter.get('/year', getYearController);
vehicleRouter.get('/allYear', getAllYearController);
vehicleRouter.post(
	'/year',
	authTokenController,
	attributeDTO,
	createYearController
);
vehicleRouter.put(
	'/year/:attribute',
	authTokenController,
	attributeDTO,
	updateYearController
);

vehicleRouter.get('/type', getTypeController);
vehicleRouter.get('/allType', getAllTypeController);
vehicleRouter.post(
	'/type',
	authTokenController,
	attributeDTO,
	createTypeController
);
vehicleRouter.put(
	'/type/:attribute',
	authTokenController,
	attributeDTO,
	updateTypeController
);

export default vehicleRouter;
