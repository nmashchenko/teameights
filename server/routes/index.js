// * Modules
const Router = require("express").Router;

// * Controllers
const userController = require("../controllers/user.controller");
const teamController = require("../controllers/team.controller");

// * Middlewares
const authMiddleware = require("../middlewares/auth.middleware");
const validationMiddleware = require("../middlewares/validation.middleware");

// * Validators
const authValidation = require("../validators/auth.validation");
const resetValidation = require("../validators/reset.validation");

const router = new Router();
router.post(
  "/registration",
  validationMiddleware(authValidation.registerValidationSchema),
  userController.registration
); // validation middleware
router.post("/login", userController.login);
router.post(
  "/social-login-registration",
  userController.socialLoginRegistration
);
router.post("/logout", userController.logout);
router.post("/reset-password", userController.resetPassword);
router.post(
  "/reset-password/:id/:token",
  validationMiddleware(resetValidation.resetValidationSchema),
  userController.resetFinish
);
router.post("/create-team", teamController.createTeam);
router.post("/add-to-team", teamController.addToTeam);

router.get("/get-teams", teamController.getTeams);
router.get("/get-user-object", userController.getUserObject);
router.get("/check-username", userController.validateUsername);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);
router.get("/reset-password/:id/:token", userController.verifyReset);

// only for authenticated users
router.post("/registration-checkout", userController.registrationCompletion);
router.get("/users-filtered", authMiddleware, userController.getUsersFiltered);
router.get("/users", authMiddleware, userController.getUsers);

module.exports = router;
