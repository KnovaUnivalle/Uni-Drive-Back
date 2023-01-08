import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import createUpdateDTO from '../dto/attribute/createUpdate.dto.js';
import {
	createCityController,
	getAllCityController,
	getCityController,
	searchCityController,
	updateCityController,
} from '../controllers/attribute/city.controller.js';
import {
	createColorController,
	getAllColorController,
	getColorController,
	searchColorController,
	updateColorController,
} from '../controllers/attribute/color.controller.js';
import {
	createBrandController,
	getAllBrandController,
	getBrandController,
	searchBrandController,
	updateBrandController,
} from '../controllers/attribute/brand.controller.js';
import {
	createYearController,
	getAllYearController,
	getYearController,
	searchYearController,
	updateYearController,
} from '../controllers/attribute/year.controller.js';
import {
	createTypeController,
	getAllTypeController,
	getTypeController,
	searchTypeController,
	updateTypeController,
} from '../controllers/attribute/type.controller.js';

const attributeRouter = Router();

attributeRouter.get('/cities', getCityController);
attributeRouter.get(
	'/city',
	authenticationController,
	authorizationAdminController,
	searchCityController,
	getAllCityController
);
attributeRouter.post(
	'/city',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createCityController
);
attributeRouter.put(
	'/city/:city',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateCityController
);

attributeRouter.get('/colors', getColorController);
attributeRouter.get(
	'/color',
	authenticationController,
	authorizationAdminController,
	searchColorController,
	getAllColorController
);
attributeRouter.post(
	'/color',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createColorController
);
attributeRouter.put(
	'/color/:attribute',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateColorController
);

attributeRouter.get('/brands', getBrandController);
attributeRouter.get(
	'/brand',
	authenticationController,
	authorizationAdminController,
	searchBrandController,
	getAllBrandController
);
attributeRouter.post(
	'/brand',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createBrandController
);
attributeRouter.put(
	'/brand/:attribute',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateBrandController
);

attributeRouter.get('/years', getYearController);
attributeRouter.get(
	'/year',
	authenticationController,
	authorizationAdminController,
	searchYearController,
	getAllYearController
);
attributeRouter.post(
	'/year',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createYearController
);
attributeRouter.put(
	'/year/:attribute',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateYearController
);

attributeRouter.get('/types', getTypeController);
attributeRouter.get(
	'/type',
	authenticationController,
	authorizationAdminController,
	searchTypeController,
	getAllTypeController
);
attributeRouter.post(
	'/type',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createTypeController
);
attributeRouter.put(
	'/type/:attribute',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateTypeController
);
export default attributeRouter;
