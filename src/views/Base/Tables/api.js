import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => axios.get(API_URL);
