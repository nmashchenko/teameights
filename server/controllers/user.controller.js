// * Modules
const { validationResult } = require("express-validator");

// * Services
const userService = require("../service/user.service");

// * Exception
const ApiError = require("../exceptions/api.error");

// * Config
const appConfig = require("../app/app.config");

const qs = require("qs");

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          ApiError.BadRequest("Error during authorization", errors.array())
        );
      }
      const { username, email, password } = req.body;
      const userData = await userService.registration(
        username,
        email,
        password
      );
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
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
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
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
      res.clearCookie("refreshToken");
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
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      }); // httpOnly to prevent changing the cookie from browser (JS), we will also need to add flag secure for https
      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async getUsers(req, res, next) {
    try {
      const { page = 1, limit = 9 } = req.query;
      const results = await userService.getAllUsers(page, limit);
      return res.json(results);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async getUsersFiltered(req, res, next) {
    try {
      const { page = 1, limit = 9, filtersQuery } = req.query;
      const parsedQuery = qs.parse(filtersQuery);

      const users = await userService.getAllUsersFiltered(
        page,
        limit,
        parsedQuery
      );

      return res.json(users);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async getEmail(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const data = await userService.checkUserEmail(refreshToken);
      return res.json(data);
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
        isRegistered
      );

      return res.json(userData);
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async resetPassword(req, res, next) {
    try {
      const { email } = req.body;
      await userService.generateLink(email);
      return res.send("Email sent");
    } catch (err) {
      console.log(err);
      // error.middleware will take care of it
      next(err);
    }
  }

  async verifyReset(req, res, next) {
    try {
      const { id, token } = req.params;
      await userService.verifyReset(id, token);
      return res.redirect(
        `${appConfig.CLIENT_URL}/auth/password-recover/${id}/${token}`
      );
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }

  async resetFinish(req, res, next) {
    try {
      const { id, token, password } = req.body;
      await userService.updatePassword(id, token, password);
      return res.send("Successfuly updated");
    } catch (err) {
      // error.middleware will take care of it
      next(err);
    }
  }
}

module.exports = new UserController();
