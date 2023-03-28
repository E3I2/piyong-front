import { BrowserRouter, Routes, Route } from "react-router-dom";
import Request from "../request/Request";
import RequestDetails from "../request/RequestDetails";
import RequestWrite from "../request/RequestWrite";
import Community from "../community/Community";
import Home from "./Home";
import CommunityWrite from "../community/CommunityWrite";
import CommunityDetails from "../community/CommunityDetails";
import Recode from "../recode/Recode";
import Streaming from "../streaming/Streaming";
import Admin from "../admin/Admin";
import Update from "../request/Update";
import ReLogin from "./ReLogin";
import CmUpdate from "../community/CmUpdate";

function Link({ user }) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/recode" element={<Recode user={user} />} />
        <Route path="/request" element={<Request user={user} />} />
        <Route path="/request/:num" element={<RequestDetails user={user} />} />
        <Route path="/request-write" element={<RequestWrite user={user} />} />
        <Route path="/community" element={<Community user={user} />} />
        <Route
          path="/community/:num"
          element={<CommunityDetails user={user} />}
        />
        <Route
          path="/community-write"
          element={<CommunityWrite user={user} />}
        />
        <Route
          path="/community-update/:num"
          element={<CmUpdate user={user} />}
        />
        <Route path="/streaming" element={<Streaming user={user} />} />
        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/request-update/:num" element={<Update user={user} />} />
        <Route path="/kakaologin" element={<ReLogin />} />
      </Routes>
    </>
  );
}

export default Link;
