import { Router } from 'express';
import bidderTokenDTO from '../dto/bidder/auth.dto.js';
import createTripController from '../controllers/trip/create.controller.js';
import tripCreateDTO from '../dto/trip/create.dto.js';

const tripRouter = Router();

tripRouter.post('/create', bidderTokenDTO, tripCreateDTO, createTripController);

export default tripRouter;
