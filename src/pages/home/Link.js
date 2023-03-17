import { BrowserRouter, Routes, Route } from "react-router-dom";
import Request from "../request/Request";
import RequestDetails from "../request/RequestDetails";
import RequestWrite from "../request/RequestWrite";
import Community from "../community/Community";
import Home from "./Home";
import CommunityWrite from "../community/CommunityWrite";
import CommunityDetails from "../community/CommunityDetails";
import Recode from "../recode/Recode";
import Monitoring from "../monitoring/Monitoring";
import Admin from "../admin/Admin";
import Update from "../request/Update";

function Link() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recode" element={<Recode />} />
        <Route path="/request" element={<Request />} />
        <Route path="/request/:num" element={<RequestDetails />} />
        <Route path="/request-write" element={<RequestWrite />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community/:num" element={<CommunityDetails />} />
        <Route path="/community-write" element={<CommunityWrite />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/request-update/:num" element={<Update />} />
      </Routes>
    </>
  );
}

export default Link;
