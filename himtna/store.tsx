
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';
const client = axios.create({
  baseURL: 'http://67.205.144.192/api/v1'
});

export default createStore(reducers,
  applyMiddleware(
    thunk,
    axiosMiddleware(client),
  )
);
