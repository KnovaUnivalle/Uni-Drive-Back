import { Router } from 'express';
import riderLoginController from '../controllers/rider/login.controller.js';
import loginDTO from '../dto/login.dto.js';
import riderJWTDTO from '../dto/rider/auth.dto.js';
import riderCreateDTO from '../dto/rider/create.dto.js';

const riderRouter = Router();

riderRouter.post('/login', loginDTO, riderLoginController);
riderRouter.post('/create', riderJWTDTO, riderCreateDTO);

export default riderRouter;
