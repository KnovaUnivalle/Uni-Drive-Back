import { Router } from 'express';
import riderLoginController from '../controllers/rider/login.controller.js';
import loginDTO from '../dto/login.dto.js';

const riderRouter = Router();

riderRouter.post('/login', loginDTO, riderLoginController);
riderRouter.get('/create');

export default riderRouter;
