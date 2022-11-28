import { Router } from 'express';
import adminTokenController from '../controllers/admin/auth.controller.js';
import {
	getBrandController,
	getColorController,
	getTypeController,
	getYearController,
} from '../controllers/vehicle/attributes.controller.js';

const vehicleRouter = Router();

vehicleRouter.get('/color', getColorController);
vehicleRouter.post('/color', adminTokenController);
vehicleRouter.put('/color/:id', adminTokenController);

vehicleRouter.get('/brand', getBrandController);
vehicleRouter.post('/brand', adminTokenController);
vehicleRouter.put('/brand/:id', adminTokenController);

vehicleRouter.get('/year', getYearController);
vehicleRouter.post('/year', adminTokenController);
vehicleRouter.put('/year/:id', adminTokenController);

vehicleRouter.get('/type', getTypeController);
vehicleRouter.post('/type', adminTokenController);
vehicleRouter.put('/type/:id', adminTokenController);

export default vehicleRouter;
