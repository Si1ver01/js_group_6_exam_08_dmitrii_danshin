import axios from 'axios';

export const axiosQuote = axios.create({
  baseURL : 'https://ddanshin-af25f.firebaseio.com/'
})