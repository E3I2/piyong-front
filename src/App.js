import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Link from "./pages/home/Link";
import HeaderAdmin from "./components/common/header/HeaderAdmin";

import { BrowserRouter, Routes, Route } from "react-router-dom";

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
