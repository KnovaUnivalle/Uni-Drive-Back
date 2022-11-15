import { Router } from 'express';

const vehicleRouter = Router();

vehicleRouter.get('/color');
vehicleRouter.get('/brand');
vehicleRouter.get('/year');
vehicleRouter.get('/type');

export default vehicleRouter;
