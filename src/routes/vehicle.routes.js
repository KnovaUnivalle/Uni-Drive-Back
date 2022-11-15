import { Router } from 'express';
import {
	getBrandController,
	getColorController,
	getTypeController,
	getYearController,
} from '../controllers/vehicle/getsAttributes.controller.js';

const vehicleRouter = Router();

vehicleRouter.get('/color', getColorController);
vehicleRouter.get('/brand', getBrandController);
vehicleRouter.get('/year', getYearController);
vehicleRouter.get('/type', getTypeController);

export default vehicleRouter;
