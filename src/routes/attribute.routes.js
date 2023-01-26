import { Router } from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import createUpdateDTO from '../dto/attribute/createUpdate.dto.js';
import {
	createCityController,
	getAllCitiesController,
	updateCityController,
	searchCitiesByIdController,
	searchCitiesByDescriptionController,
	searchCitiesByActiveController,
} from '../controllers/attribute/city.controller.js';
import {
	createColorController,
	getAllColorsController,
	updateColorController,
	searchColorsByIdController,
	searchColorsByDescriptionController,
	searchColorsByActiveController,
} from '../controllers/attribute/color.controller.js';
import {
	createBrandController,
	getAllBrandsController,
	updateBrandController,
	searchBrandsByIdController,
	searchBrandsByDescriptionController,
	searchBrandsByActiveController,
} from '../controllers/attribute/brand.controller.js';
import {
	createYearController,
	getAllYearsController,
	updateYearController,
	searchYearsByIdController,
	searchYearsByDescriptionController,
	searchYearsByActiveController,
} from '../controllers/attribute/year.controller.js';
import {
	createTypeController,
	getAllTypesController,
	updateTypeController,
	searchTypesByDescriptionController,
	searchTypesByIdController,
	searchTypesByActiveController,
} from '../controllers/attribute/type.controller.js';

const attributeRouter = Router();

attributeRouter.use(authenticationController, authorizationAdminController);

attributeRouter.get(
	'/city',
	searchCitiesByIdController,
	searchCitiesByDescriptionController,
	searchCitiesByActiveController,
	getAllCitiesController
);
attributeRouter.post('/city', createUpdateDTO, createCityController);
attributeRouter.put('/city/:attribute', createUpdateDTO, updateCityController);

attributeRouter.get(
	'/color',
	searchColorsByIdController,
	searchColorsByDescriptionController,
	searchColorsByActiveController,
	getAllColorsController
);
attributeRouter.post('/color', createUpdateDTO, createColorController);
attributeRouter.put(
	'/color/:attribute',
	createUpdateDTO,
	updateColorController
);

attributeRouter.get(
	'/brand',
	searchBrandsByIdController,
	searchBrandsByDescriptionController,
	searchBrandsByActiveController,
	getAllBrandsController
);
attributeRouter.post('/brand', createUpdateDTO, createBrandController);
attributeRouter.put(
	'/brand/:attribute',
	createUpdateDTO,
	updateBrandController
);

attributeRouter.get(
	'/year',
	searchTypesByIdController,
	searchTypesByDescriptionController,
	searchTypesByActiveController,
	getAllYearsController
);
attributeRouter.post('/year', createUpdateDTO, createYearController);
attributeRouter.put('/year/:attribute', createUpdateDTO, updateYearController);

attributeRouter.get(
	'/type',
	searchYearsByIdController,
	searchYearsByDescriptionController,
	searchYearsByActiveController,
	getAllTypesController
);
attributeRouter.post('/type', createUpdateDTO, createTypeController);
attributeRouter.put('/type/:attribute', createUpdateDTO, updateTypeController);

export default attributeRouter;
