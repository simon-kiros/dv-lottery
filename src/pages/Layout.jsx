import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Start from "./start/Start";
import Step from "./step/Step";

function Layout() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/step" element={<Step />} />
        <Route
          path="*"
          element={<h2 className="text-center mt-4">404 Page Not Found</h2>}
        />
      </Routes>
    </div>
  );
}

export default Layout;
