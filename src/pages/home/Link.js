import Request from "../request/Request";
import RequestDetails from "../request/RequestDetails";
import RequestWrite from "../request/RequestWrite";
import Community from "../community/Community";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import CommunityWrite from "../community/CommunityWrite";

function Link() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/request" element={<Request />} />
          <Route path="/request-details" element={<RequestDetails />} />
          <Route path="/request-write" element={<RequestWrite />} />
          <Route path="/community" element={<Community />} />
          <Route path="community-write" element={<CommunityWrite />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Link;
