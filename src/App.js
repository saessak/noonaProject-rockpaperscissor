
import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Rockpaperscissor from './pages/Rockpaperscissor';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rockpaperscissor" element={<Rockpaperscissor />}></Route>
          <Route path="/Page2" element={<Page2 />}></Route>
          <Route path="/Page3" element={<Page3 />}></Route>
        </Routes>
      </BrowserRouter>
    );
}


