import axios from 'axios';
import { URL } from './global';

let now = new Date();

export const getNew = async (topic) => await axios.get(`${URL}q=${topic}&from=${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}&sortBy=publishedAt&apiKey=c61b67d52a5a407ebc157900da433e7c`)
