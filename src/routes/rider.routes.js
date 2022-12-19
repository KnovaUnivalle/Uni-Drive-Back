import { Router } from 'express';
import riderLoginController from '../controllers/rider/login.controller.js';
import loginDTO from '../dto/login.dto.js';
import riderCreateController from '../controllers/rider/create.controller.js';
import riderCreateDTO from '../dto/rider/create.dto.js';
import riderExistController from '../controllers/rider/exits.controller.js';

const riderRouter = Router();

riderRouter.post('/login', loginDTO, riderLoginController);
riderRouter.post(
	'/create',
	riderCreateDTO,
	riderExistController,
	riderCreateController
);

export default riderRouter;
