import express from 'express';
import {registerController, 
    loginController, testController, forgotPasswordController,
} from "../controllers/authController.js";

import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Register routes
router.post('/register', registerController)

// Login
router.post('/login', loginController)

//forget pass
router.post('/forgot-password', forgotPasswordController)

//test routes

router.get('/test', requireSignIn, isAdmin,testController)


//protected routes

router.get('/user-auth', requireSignIn, (req, res) => {
    res.status(200).send({ok: true});
})

//admin auth

router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true});
})

export default router


