
import './App.css';

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MysteryPage from "./pages/MysteryPage";
// import SwapPage from "./pages/SwapPage"; // later
// import BooksPage from "./pages/BooksPage"; // later

function App() {
  return (  
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/mystery" element={<MysteryPage />} />
        {/* <Route path="/swap" element={<SwapPage />} /> */}
        {/* <Route path="/books" element={<BooksPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
