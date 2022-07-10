// * Models
const User = require('../models/User');

// * Modules
const bcrypt = require('bcrypt');
const uuid = require('uuid');

// * Services
const mailService = require('./mail.service');
const tokenService = require('./token.service');

// * Helpers
const UserDto = require('../helpers/user.dto');

// * Exceptions
const ApiError = require('../exceptions/api.error');

// * Config
const appConfig = require('../app/app.config')

class UserService {
  async registration(username, email, password) {
    const candidate = await User.findOne({ email })
    if (candidate) {
      throw ApiError.BadRequest(`User with email: ${email} already registered`)
    }

    const usernameValidation = await User.findOne({ username })
    if (usernameValidation) {
      throw ApiError.BadRequest(`User with username: ${username} already registered`)
    }

    const hashPassword = await bcrypt.hash(password, 3); // hash password
    const activationLink = uuid.v4(); // generate activation link (v34fa-adsfaa-8138183-dwadw)
    const user = await User.create({ username, email, password: hashPassword, activationLink });
    await mailService.sendActivationMail(email, `${appConfig.API_URL}/api/activate/${activationLink}`); // send activation email
    const userDto = new UserDto(user); // id, email, isActivated
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database

    return { ...tokens, user: userDto } // return access&refresh tokens, and user
  }

  async activate(activationLink) {
    const user = await User.findOne({ activationLink })
    if (!user) {
      throw ApiError.BadRequest('Incorrect activation link')
    }

    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await User.findOne({ email })
    if (!user) {
      throw ApiError.BadRequest('User with this email is not found')
    }

    const isPassEquals = await bcrypt.compare(password, user.password)
    if (!isPassEquals) {
      throw ApiError.BadRequest('Incorrect password')
    }

    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
    return { ...tokens, user: userDto } // return access&refresh tokens, and user
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
    if (!userData || !tokenFromDb) { // if either refresh token is not validated OR not found in DB -> user is not logged in
      throw ApiError.UnauthorizedError();
    }

    const user = await User.findById(userData.id)
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto }); // get tokens
    await tokenService.saveToken(userDto.id, tokens.refreshToken); // save refresh token into the database
    return { ...tokens, user: userDto } // return access&refresh tokens, and user
  }



  // * test function -> should be removed soon
  async getAllUsers() {
    const users = await User.find();
    return users;
  }

  async registrationCompletion(
    email,
    userCountry,
    userAge,
    userProgrammingLanguages,
    userConcentration,
    userLeader,
    userLinks,
    userExperience,
    userRole
    ) {
    const candidate = await User.findOne({ email })
    if (!candidate) {
      throw ApiError.BadRequest(`User with email: ${email} is not registered`)
    }

    const userData = await User.findOneAndUpdate({ email }, {
      userCountry,
      userAge,
      userProgrammingLanguages,
      userConcentration,
      userLinks,
      userExperience,
      userRole,
      userLeader
    })

    return { userData } // return access&refresh tokens, and user
  }
}

module.exports = new UserService();