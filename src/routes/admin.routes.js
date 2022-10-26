import { Router } from 'express';
import adminLoginController from '../controllers/admin/login.controller.js';
import loginDTO from '../dto/login.dto.js';

const adminRouter = Router();

adminRouter.post('/login', loginDTO, adminLoginController);

export default adminRouter;
