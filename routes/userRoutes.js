import express  from 'express';
import registerNewUserController from '../controllers/userControllers/registerUserController.js';
import loginUserController from '../controllers/userControllers/loginController';

const userRoutes = express.Router();

userRoutes.get('/login/:userName/:password', loginUserController);
userRoutes.post('/register', registerNewUserController);

export default userRoutes;