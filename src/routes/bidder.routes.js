import { Router } from 'express';
import bidderLoginController from '../controllers/bidder/login.controller.js';
import bidderCreateController from '../controllers/bidder/create.controller.js';
import bidderCreateDTO from '../dto/bidder/create.dto.js';
import loginDTO from '../dto/login.dto.js';

const bidderRouter = Router();

bidderRouter.post('/login', loginDTO, bidderLoginController);
bidderRouter.post('/create', bidderCreateDTO, bidderCreateController);

export default bidderRouter;
