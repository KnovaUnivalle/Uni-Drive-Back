import { Router } from 'express';
import adminLoginController from '../controllers/admin/login.controller.js';
import bidderLoginController from '../controllers/bidder/login.controller.js';
import riderLoginController from '../controllers/rider/login.controller.js';
import bidderCreateController from '../controllers/bidder/create.controller.js';
import bidderCreateDTO from '../dto/bidder/create.dto.js';
import bidderExistController from '../controllers/bidder/exist.controller.js';
import vehicleExistController from '../controllers/vehicle/exist.controller.js';
import vehicleCreateController from '../controllers/vehicle/create.controller.js';
import riderCreateController from '../controllers/rider/create.controller.js';
import riderCreateDTO from '../dto/rider/create.dto.js';
import riderExistController from '../controllers/rider/exits.controller.js';
import loginDTO from '../dto/login.dto.js';
import { getActiveCitiesController } from '../controllers/attribute/city.controller.js';
import { getActiveColorsController } from '../controllers/attribute/color.controller.js';
import { getActiveBrandsController } from '../controllers/attribute/brand.controller.js';
import { getActiveYearsController } from '../controllers/attribute/year.controller.js';
import { getActiveTypesController } from '../controllers/attribute/type.controller.js';

const utilsRouter = Router();

utilsRouter.post('/login/admin', loginDTO, adminLoginController);
utilsRouter.post('/login/bidder', loginDTO, bidderLoginController);
utilsRouter.post('/login/rider', loginDTO, riderLoginController);

utilsRouter.post(
	'/create/bidder',
	bidderCreateDTO,
	bidderExistController,
	vehicleExistController,
	bidderCreateController,
	vehicleCreateController
);
utilsRouter.post(
	'/create/rider',
	riderCreateDTO,
	riderExistController,
	riderCreateController
);

utilsRouter.get('/city', getActiveCitiesController);
utilsRouter.get('/color', getActiveColorsController);
utilsRouter.get('/brand', getActiveBrandsController);
utilsRouter.get('/year', getActiveYearsController);
utilsRouter.get('/type', getActiveTypesController);

export default utilsRouter;
