// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WarehouseList from "./components/WarehouseList";
import WarehouseDetails from "./components/WarehouseDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WarehouseList />} />
        <Route path="/warehouse/:id" element={<WarehouseDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
