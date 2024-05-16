import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

import "@mantine/core/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <MantineProvider>
          <App />
        </MantineProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
