import { Router } from 'express';
import bidderLoginController from '../controllers/bidder/login.controller.js';
import loginDTO from '../dto/login.dto.js';

const bidderRouter = Router();

bidderRouter.post('/login', loginDTO, bidderLoginController);

export default bidderRouter;
