// * Api
import api from "../http";

// test function
export default class UserService {
  static fetchUsers() {
    return api.get('/users')
  }

}