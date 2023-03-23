import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import Link from "./pages/home/Link";
import { BrowserRouter } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Link />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
