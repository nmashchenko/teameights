// * Models
const User = require("../models/User");

// * Modules
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const isEmpty = require("lodash/isEmpty");

// * Services
const mailService = require("./mail.service");
const tokenService = require("./token.service");

// * Helpers
const UserDto = require("../helpers/user.dto");

// * Exceptions
const ApiError = require("../exceptions/api.error");

// * Config
const appConfig = require("../app/app.config");

class UserService {
  async registration(username, email, password) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw ApiError.BadRequest(`User with email: ${email} already registered`);
    }

    const usernameValidation = await User.findOne({ username });
    if (usernameValidation) {
      throw ApiError.BadRequest(
        `User with username: ${username} already registered`
      );
    }

    const hashPassword = await bcrypt.hash(password, 3); // hash password
    const activationLink = uuid.v4(); // generate activation link (v34fa-adsfaa-8138183-dwadw)
    const isRegistered = false;
    const user = await User.create({
      username,
      email,
      password: hashPassword,
      activationLink,
      isRegistered,
    });

    await mailService.sendActivationMail(
      email,
      `${appConfig.API_URL}/api/activate/${activationLink}`
    ); // send activation email
    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database

    return { ...tokens, user }; // return access&refresh tokens, and user
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink });
    if (!user) {
      throw ApiError.BadRequest("Incorrect activation link");
    }

    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("User with this email is not found");
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Incorrect password");
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
    return { ...tokens, user }; // return access&refresh tokens, and user
  }

  async socialLoginRegistration(name, email, picture, sub) {
    const user = await User.findOne({ email });
    if (!user) {
      const isRegistered = false;
      const isActivated = true;
      const hashPassword = await bcrypt.hash(sub, 3); // hash password
      const user = await User.create({
        username: "temporary",
        userRealName: name,
        password: hashPassword,
        email,
        isRegistered,
        isActivated,
        userAvatar: picture,
      });
      const userDto = new UserDto(user);
      const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
      await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
      return { ...tokens, user }; // return access&refresh tokens, and user
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
    return { ...tokens, user }; // return access&refresh tokens, and user
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken); // remove refresh token from DB if user logs out
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      // if either refresh token is not validated OR not found in DB -> user is not logged in
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
    return { ...tokens, user }; // return access&refresh tokens, and user
  }

  async getAllUsers(page, limit) {
    page = parseInt(page);
    limit = parseInt(limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await User.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    results.results = await User.find({ isRegistered: true })
      .limit(limit)
      .skip(startIndex);
    return results;
  }

  async getAllUsersFiltered(page, limit, filtersQuery) {
    page = parseInt(page);
    limit = parseInt(limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    const users = await User.find(filtersQuery);

    if (endIndex < users.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }
    results.results = await User.find(filtersQuery)
      .limit(limit)
      .skip(startIndex);
    return results;
  }

  async checkUserEmail(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      // if either refresh token is not validated OR not found in DB -> user is not logged in
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findById(userData.id);

    return user;
  }

  async registrationCompletion(
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
  ) {
    const candidate = await User.findOne({ email });
    if (!candidate) {
      throw ApiError.BadRequest(`User with email: ${email} is not registered`);
    }

    const userData = await User.findOneAndUpdate(
      { email },
      {
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
      }
    );

    return { userData }; // return access&refresh tokens, and user
  }

  async generateLink(email) {
    const user = await User.findOne({ email });
    if (!user) {
      throw ApiError.BadRequest("User with this email is not found");
    }
    const userDto = new UserDto(user);
    const payload = { email: userDto.email, id: userDto.id };

    const token = jwt.sign(payload, appConfig.JWT_SECURE_KEY, {
      expiresIn: "15m",
    });
    await mailService.sendResetEmail(
      email,
      `${appConfig.API_URL}/api/reset-password/${userDto.id}/${token}`
    ); // send activation email
  }

  async verifyReset(id, token) {
    const user = await User.findOne({ _id: id });

    if (!user) {
      throw ApiError.BadRequest("Invalid link");
    }

    jwt.verify(token, appConfig.JWT_SECURE_KEY);
  }

  async updatePassword(id, token, password) {
    const user = await User.findOne({ _id: id });

    if (!user) {
      throw ApiError.BadRequest("Invalid link");
    }

    jwt.verify(token, appConfig.JWT_SECURE_KEY);

    const hashPassword = await bcrypt.hash(password, 3); // hash password
    await User.findOneAndUpdate({ _id: id }, { password: hashPassword });
  }
}

module.exports = new UserService();
