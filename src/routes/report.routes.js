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
} from '../controllers/report/user.controller.js';

const reportRouter = Router();

reportRouter.use(authenticationController, authorizationAdminController);

reportRouter.get('/active/bidder', activeBidderController);
reportRouter.get('/active/rider', activeRiderController);

reportRouter.get('/active/brand', activeBrandController);
reportRouter.get('/active/city', activeCityController);

reportRouter.get('/active/color', activeColorController);
reportRouter.get('/active/type', activeTypeController);
reportRouter.get('/active/year', activeYearController);

reportRouter.get('/birthDay/bidder', birthBidderDayController);

reportRouter.get('/birthDay/rider', birthRiderDayController);

reportRouter.get('/attribute/brand', frequentBrandController);
reportRouter.get('/attribute/color', frequentColorController);
reportRouter.get('/attribute/type', frequentTypeController);
reportRouter.get('/attribute/year', frequentYearController);

export default reportRouter;
