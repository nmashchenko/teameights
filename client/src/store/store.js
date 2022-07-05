// * Modules
import {makeAutoObservable} from 'mobx'
import axios from 'axios';

// * Services
import AuthService from '../services/AuthService';

// * Api
import { API_URL } from '../http';

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  async login(email, password) {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }

  async registration(username, email, password, repeatPassword) {
    try {
      const response = await AuthService.registration(username, email, password, repeatPassword);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }

  async logout() {
    try {
      await AuthService.logout();
      localStorage.removeItem('token');
      this.setAuth(false);
      this.setUser({});
    } catch (err) {
      console.log(err.response?.data?.message);
    }
  }

  async checkAuth() {
    this.setLoading(true); 
    try {
      const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken);
      this.setAuth(true);
      this.setUser(response.data.user);
    } catch(err) {
      console.log(err.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}