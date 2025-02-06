import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
