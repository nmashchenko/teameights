// * Modules
const jwt = require("jsonwebtoken");

//* Models
const Token = require("../models/Token");

// * Config
const appConfig = require("../app/app.config");

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, appConfig.JWT_ACCESS_KEY, {
      expiresIn: "24h",
    });
    const refreshToken = jwt.sign(payload, appConfig.JWT_REFRESH_KEY, {
      expiresIn: "30d",
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, appConfig.JWT_ACCESS_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, appConfig.JWT_REFRESH_KEY);
      return userData;
    } catch (err) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    // * Important note: With this approach, for one user we will get only one token,
    // * so this basically means if user is logged in from his PC and will login from
    // * his Ipad, he will be automatically logged out on PC
    const tokenData = await Token.findOne({ user: userId });
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return await tokenData.save();
    }

    const token = await Token.create({ user: userId, refreshToken });
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await Token.deleteOne({ refreshToken });
    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({ refreshToken });
    return tokenData;
  }
}

module.exports = new TokenService();
