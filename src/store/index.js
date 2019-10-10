import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';
import rootReducer from '../rootReducer';

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(axiosMiddleware(axios)));
};

const store = configureStore();
