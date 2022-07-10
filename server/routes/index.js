// * Modules
const Router = require('express').Router;

// * Controllers
const userController = require('../controllers/user.controller');

// * Middlewares
const authMiddleware = require('../middlewares/auth.middleware')
const validationMiddleware = require('../middlewares/validation.middleware')

// * Validators
const authValidation = require('../validators/auth.validation')

const router = new Router();
router.post('/registration', validationMiddleware(authValidation.registerValidationSchema), userController.registration); // validation middleware
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/registration-checkout', userController.registrationCompletion);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router 