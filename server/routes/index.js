// * Modules
const Router = require('express').Router;

// * Controllers
const userController = require('../controllers/user.controller');

// * Middlewares
const authMiddleware = require('../middlewares/auth.middleware')
const validationMiddleware = require('../middlewares/validation.middleware')

// * Validators
const authValidation = require('../validators/auth.validation')
const resetValidation = require('../validators/reset.validation')

const router = new Router();
router.post('/registration', validationMiddleware(authValidation.registerValidationSchema), userController.registration); // validation middleware
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.post('/registration-checkout', userController.registrationCompletion);
router.post('/check-registration', userController.checkIsRegistered);
router.post('/reset-password', userController.resetPassword)
router.post('/reset-password/:id/:token', validationMiddleware(resetValidation.resetValidationSchema), userController.resetFinish)

router.get('/get-email', userController.getEmail)
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.get('/reset-password/:id/:token', userController.verifyReset);




module.exports = router 