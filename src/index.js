import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import createStore from "./state/createStore";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

const store = createStore();

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);
