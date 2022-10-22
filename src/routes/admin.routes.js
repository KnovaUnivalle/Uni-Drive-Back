import { Router } from 'express';
import loginDTO from '../dto/login.dto';

const adminRouter = Router();

adminRouter.post('/login', loginDTO); //adminLoginController

export default adminRouter;
