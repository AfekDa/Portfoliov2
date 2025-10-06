import "./App.css";
import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";

// Lazy load components for better performance
const Home = lazy(() => import("./Pages/Home/Homescreen"));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="*" element={<div>404 Not Found</div>}></Route>
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
