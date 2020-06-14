import axios from 'axios';
const URL = 'https://randomuser.me/api/?results=50';

export const getDataFromServer = () => {
  return axios.get(URL);
}