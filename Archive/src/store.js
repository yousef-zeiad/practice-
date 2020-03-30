import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import reducers from './reducers';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  responseType: 'json'
});

export default createStore(
  reducers,
  applyMiddleware(
    thunk,
    axiosMiddleware(client),
  )
)
