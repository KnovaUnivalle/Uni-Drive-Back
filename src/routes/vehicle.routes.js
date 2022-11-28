import { Router } from 'express';
import authTokenController from '../controllers/auth.controller.js';
import {
	getBrandController,
	getColorController,
	getTypeController,
	getYearController,
} from '../controllers/vehicle/attributes.controller.js';

const vehicleRouter = Router();

vehicleRouter.get('/color', getColorController);
vehicleRouter.post('/color', authTokenController);
vehicleRouter.put('/color/:id', authTokenController);

vehicleRouter.get('/brand', getBrandController);
vehicleRouter.post('/brand', authTokenController);
vehicleRouter.put('/brand/:id', authTokenController);

vehicleRouter.get('/year', getYearController);
vehicleRouter.post('/year', authTokenController);
vehicleRouter.put('/year/:id', authTokenController);

vehicleRouter.get('/type', getTypeController);
vehicleRouter.post('/type', authTokenController);
vehicleRouter.put('/type/:id', authTokenController);

export default vehicleRouter;
