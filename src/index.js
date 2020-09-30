import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import configureStore from './store/store';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , root);
