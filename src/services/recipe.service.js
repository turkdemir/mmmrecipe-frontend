import axios from "axios";
import API_BASE_URL from "./apibase";

const API_URL = `${API_BASE_URL}api/recipes/paginatedRecipes/`;
const API_URL_ALL = `${API_BASE_URL}api/recipes/`;
const API_URL_SEARCH = `${API_BASE_URL}api/recipes/filteredRecipes`;
const API_URL_SORTED = `${API_BASE_URL}api/recipes/getSortedList`;
const API_URL_SAVED = `${API_BASE_URL}api/recipes/getSavedRecipes/`


const getAllRecipes = () => {
  return axios.get(API_URL_ALL);
};

const getRecipe = (params) => {
  return axios.get(API_URL, { params });
};

const findOneRecipe = (id) => {
  return axios.get(API_URL_ALL + id);
};

const getSavedRecipes = (id) => {
  return axios.get(API_URL_SAVED + id);
};

const voteRecipe = (id, update) => {
  return axios.put(API_URL_ALL + id, update);
};
const saveForLaterRecipe = (id, update) => {
  return axios.put(API_URL_ALL + id, update);
};

const searchRecipe = (params) => {
  return axios.post(API_URL_SEARCH, params);
};

const sortedList = (params) => {
  return axios.post(API_URL_SORTED, params);
};

const myObject = {
    getRecipe,
    voteRecipe,
    searchRecipe,
    getAllRecipes,
    sortedList,
    saveForLaterRecipe,
    findOneRecipe,
    getSavedRecipes
}

export default myObject;