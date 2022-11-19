import { Router } from 'express';
import bidderTokenDTO from '../dto/bidder/auth.dto.js';
import createTripController from '../controllers/trip/create.controller.js';

const tripRouter = Router();

tripRouter.post('/create', bidderTokenDTO, createTripController);

export default tripRouter;
