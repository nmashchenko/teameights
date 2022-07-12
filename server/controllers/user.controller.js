// * Modules
const { validationResult } = require('express-validator')

// * Services
const userService = require('../service/user.service')

// * Exception
const ApiError = require('../exceptions/api.error')

// * Config
const appConfig = require('../app/app.config')

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Error during authorization', errors.array()))
      }
      const { username, email, password } = req.body;
      const userData = await userService.registration(username, email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(appConfig.COMPLETE_REGISTRATION_URL);
    } catch(err){
      // error.middleware will take care of it
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async checkIsRegistered(req, res, next) {
    try {
      const status = await userService.checkIsRegistered(req.body.email);
      return res.json(status);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async getEmail(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const email = await userService.checkUserEmail(refreshToken);
      return res.json(email);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async registrationCompletion(req, res, next) {
    try {
      const {
        email,
        userCountry,
        userAge,
        userProgrammingLanguages,
        userConcentration,
        userRealName,
        userLinks,
        userExperience,
        userRole,
        userLeader,
        isRegistered,
      } = req.body;

      const userData = await userService.registrationCompletion(
        email,
        userCountry,
        userAge,
        userProgrammingLanguages,
        userConcentration,
        userRealName,
        userLinks,
        userExperience,
        userLeader,
        userRole,
        isRegistered,
      );

      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

}

module.exports = new UserController();