import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import Main from "./Main.js";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Main />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
