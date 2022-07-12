module.exports = class userDto {
  email;
  id;
  isActivated;
  isRegistered;

  constructor(model) {
    this.email = model.email;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.isRegistered = model.isRegistered;
  }
}