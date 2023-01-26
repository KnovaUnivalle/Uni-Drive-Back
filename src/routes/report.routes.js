import { Router } from 'express';
import authorizationAdminController from '../controllers/admin/authorization.controller.js';
import authenticationController from '../controllers/authentication.controller.js';
import {
	activeBrandController,
	activeCityController,
	activeColorController,
	activeTypeController,
	activeYearController,
	frequentBrandController,
	frequentColorController,
	frequentTypeController,
	frequentYearController,
} from '../controllers/report/attribute.controller.js';
import {
	activeBidderController,
	activeRiderController,
	birthBidderDayController,
	birthRiderDayController,
	frequentRiderController,
} from '../controllers/report/user.controller.js';
import {
	activeVehicleController,
	frequentVehicleController,
} from '../controllers/report/vehicle.controller.js';

const reportRouter = Router();

reportRouter.use(authenticationController, authorizationAdminController);

reportRouter.get('/active/bidder', activeBidderController);
reportRouter.get('/active/rider', activeRiderController);

reportRouter.get('/active/brand', activeBrandController);
reportRouter.get('/active/city', activeCityController);

reportRouter.get('/active/color', activeColorController);
reportRouter.get('/active/type', activeTypeController);
reportRouter.get('/active/year', activeYearController);

reportRouter.get('/active/vehicle', activeVehicleController);

reportRouter.get('/birthDay/bidder', birthBidderDayController);

reportRouter.get('/birthDay/rider', birthRiderDayController);

reportRouter.get('/frequent/brand', frequentBrandController);
reportRouter.get('/frequent/color', frequentColorController);
reportRouter.get('/frequent/type', frequentTypeController);
reportRouter.get('/frequent/year', frequentYearController);
reportRouter.get('/frequent/vehicle', frequentVehicleController);
reportRouter.get('/frequent', frequentRiderController);

export default reportRouter;
