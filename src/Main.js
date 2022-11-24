import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./Register";
import App from "./App";

const Main = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
};

export default Main;
