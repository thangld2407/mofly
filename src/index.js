import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/font-awesome/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./Context/AppContext";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      {/* <AppProvider>
        <App />
      </AppProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
