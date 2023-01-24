import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import createUpdateDTO from '../dto/attribute/createUpdate.dto.js';
import {
	createCityController,
	getAllCitiesController,
	getActiveCities,
	updateCityController,
	searchCitiesByIdController,
	searchCitiesByDescriptionController,
	searchCitiesByActiveController,
} from '../controllers/attribute/city.controller.js';
import {
	createColorController,
	getAllColorsController,
	getActiveColorsController,
	updateColorController,
	searchColorsByIdController,
	searchColorsByDescriptionController,
	searchColorsByActiveController,
} from '../controllers/attribute/color.controller.js';
import {
	createBrandController,
	getAllBrandsController,
	getActiveBrandsController,
	updateBrandController,
	searchBrandsByIdController,
	searchBrandsByDescriptionController,
	searchBrandsByActiveController,
} from '../controllers/attribute/brand.controller.js';
import {
	createYearController,
	getAllYearsController,
	getActiveYearsController,
	updateYearController,
	searchYearsByIdController,
	searchYearsByDescriptionController,
	searchYearsByActiveController,
} from '../controllers/attribute/year.controller.js';
import {
	createTypeController,
	getAllTypesController,
	getActiveTypesController,
	updateTypeController,
	searchTypesByDescriptionController,
	searchTypesByIdController,
	searchTypesByActiveController,
} from '../controllers/attribute/type.controller.js';

const attributeRouter = Router();

attributeRouter.get('/cities', getActiveCities);
attributeRouter.get(
	'/city',
	authenticationController,
	authorizationAdminController,
	searchCitiesByIdController,
	searchCitiesByDescriptionController,
	searchCitiesByActiveController,
	getAllCitiesController
);
attributeRouter.post(
	'/city',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	createCityController
);
attributeRouter.put(
	'/city/:attribute',
	authenticationController,
	authorizationAdminController,
	createUpdateDTO,
	updateCityController
);

attributeRouter.get('/colors', getActiveColorsController);
attributeRouter.get(
	'/color',
	authenticationController,
	authorizationAdminController,
	searchColorsByIdController,
	searchColorsByDescriptionController,
	searchColorsByActiveController,
	getAllColorsController
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

attributeRouter.get('/brands', getActiveBrandsController);
attributeRouter.get(
	'/brand',
	authenticationController,
	authorizationAdminController,
	searchBrandsByIdController,
	searchBrandsByDescriptionController,
	searchBrandsByActiveController,
	getAllBrandsController
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

attributeRouter.get('/years', getActiveYearsController);
attributeRouter.get(
	'/year',
	authenticationController,
	authorizationAdminController,
	searchTypesByIdController,
	searchTypesByDescriptionController,
	searchTypesByActiveController,
	getAllYearsController
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

attributeRouter.get('/types', getActiveTypesController);
attributeRouter.get(
	'/type',
	authenticationController,
	authorizationAdminController,
	searchYearsByIdController,
	searchYearsByDescriptionController,
	searchYearsByActiveController,
	getAllTypesController
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
