import { Router } from 'express';
import bidderLoginController from '../controllers/bidder/login.controller.js';
import bidderCreateController from '../controllers/bidder/create.controller.js';
import bidderCreateDTO from '../dto/bidder/create.dto.js';
import loginDTO from '../dto/login.dto.js';
import authenticationController from '../controllers/authentication.controller.js';
import authorizationController from '../controllers/bidder/authorization.controller.js';
import { getVehicles } from '../controllers/vehicle/get.controller.js';

const bidderRouter = Router();

bidderRouter.post('/login', loginDTO, bidderLoginController);
bidderRouter.post('/create', bidderCreateDTO, bidderCreateController);
bidderRouter.get(
	'/vehicles',
	authenticationController,
	authorizationController,
	getVehicles
);

export default bidderRouter;
