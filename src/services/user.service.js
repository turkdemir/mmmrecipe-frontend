import axios from "axios";
import authHeader from "./auth-header";
import API_BASE_URL from "./apibase";

const API_URL = `${API_BASE_URL}api/test/`;
const API_URL_ALL_USERS = `${API_BASE_URL}api/user/allUsers`;
const API_URL_USER_DELETE = `${API_BASE_URL}api/user/remove/`;
const API_URL_USER_FIND = `${API_BASE_URL}api/userDetails/`;
const API_URL_USER_UPDATE = `${API_BASE_URL}api/userUpdate/`;
const API_URL_USER_RECIPES = `${API_BASE_URL}api/users/getUserRecipes/`;
const API_URL_USER_USERNAME = `${API_BASE_URL}api/findUserByUsername/`;

const API_URL_REMOVE_RECIPE = `${API_BASE_URL}api/recipes/`;




const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getAllUsers = () => {
  return axios.post(API_URL_ALL_USERS);
};

const removeUser = (params) => {
  return axios.delete(API_URL_USER_DELETE + params);
};

const findOneUser = (params) => {
  return axios.get(API_URL_USER_FIND + params);
};

const updateUser = (id, update) => {
  return axios.put(API_URL_USER_UPDATE + id, update);
};

const getUserRecipes = (params) => {
  return axios.get(API_URL_USER_RECIPES + params);
};

const getUserByUsername = (params) => {
  return axios.get(API_URL_USER_USERNAME + params);
};

const removeRecipe = (params) => {
  return axios.delete(API_URL_REMOVE_RECIPE + params);
};

const myObject = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAllUsers,
  removeUser,
  findOneUser,
  updateUser,
  getUserRecipes,
  removeRecipe,
  getUserByUsername
};

export default myObject;