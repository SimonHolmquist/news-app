import axios from 'axios';
import { URL } from './global';

let now = new Date();

const getNew = async (topic) => await axios.get(`${URL}q=${topic}&language=es&from=${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}&sortBy=publishedAt&apiKey=c61b67d52a5a407ebc157900da433e7c`)
const getTop = async () => await axios.get(`http://newsapi.org/v2/top-headlines?country=ar&apiKey=c61b67d52a5a407ebc157900da433e7c`);
export {getNew,getTop};