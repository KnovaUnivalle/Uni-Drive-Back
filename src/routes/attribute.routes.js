import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationController from '../controllers/admin/authorization.controller.js';
import createUpdateDTO from '../dto/attribute/createUpdate.dto.js';
import {
	createCityController,
	getAllCityController,
	updateCityController,
} from '../controllers/attribute/city.controller.js';
import {
	createColorController,
	getAllColorController,
	getColorController,
	updateColorController,
} from '../controllers/attribute/color.controller.js';
import {
	createBrandController,
	getAllBrandController,
	getBrandController,
	updateBrandController,
} from '../controllers/attribute/brand.controller.js';
import {
	createYearController,
	getAllYearController,
	getYearController,
	updateYearController,
} from '../controllers/attribute/year.controller.js';
import {
	createTypeController,
	getAllTypeController,
	getTypeController,
	updateTypeController,
} from '../controllers/attribute/type.controller.js';

const attributeRouter = Router();

attributeRouter.get('/cities', getCityController);
attributeRouter.get(
	'/city',
	authenticationController,
	authorizationController,
	getAllCityController
);
attributeRouter.post(
	'/city',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	createCityController
);
attributeRouter.put(
	'/city/:city',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	updateCityController
);

attributeRouter.get('/colors', getColorController);
attributeRouter.get(
	'/color',
	authenticationController,
	authorizationController,
	getAllColorController
);
attributeRouter.post(
	'/color',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	createColorController
);
attributeRouter.put(
	'/color/:attribute',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	updateColorController
);

attributeRouter.get('/brands', getBrandController);
attributeRouter.get(
	'/brand',
	authenticationController,
	authorizationController,
	getAllBrandController
);
attributeRouter.post(
	'/brand',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	createBrandController
);
attributeRouter.put(
	'/brand/:attribute',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	updateBrandController
);

attributeRouter.get('/years', getYearController);
attributeRouter.get(
	'/year',
	authenticationController,
	authorizationController,
	getAllYearController
);
attributeRouter.post(
	'/year',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	createYearController
);
attributeRouter.put(
	'/year/:attribute',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	updateYearController
);

attributeRouter.get('/types', getTypeController);
attributeRouter.get(
	'/type',
	authenticationController,
	authorizationController,
	getAllTypeController
);
attributeRouter.post(
	'/type',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	createTypeController
);
attributeRouter.put(
	'/type/:attribute',
	authenticationController,
	authorizationController,
	createUpdateDTO,
	updateTypeController
);
export default attributeRouter;
