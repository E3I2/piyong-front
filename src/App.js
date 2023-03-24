import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Link from "./pages/home/Link";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
// import { Navigate, useLocation } from "react-router";
// import React, { useState, useEffect, useRef } from "react";
import { Navigate } from "react-router";
import React, { useState, useEffect } from "react";

function App() {
  // 로그인 여부
  const [user, setUser] = useState([]);

  // 유저 토큰 여부
  useEffect(() => {
    console.log("user 변경전전 :", user);
    if (localStorage.getItem("token")) {
      axios
        .get("https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/getuser", {
          method: "GET",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => setUser(res.data));
      // .then((data) => setUser(data));
      // .then(console.log("user", user));
    }
    console.log(localStorage.getItem("token"));
  }, [Navigate]);

  useEffect(() => {
    console.log("user 변경됨 :", user);
    // window.location.reload();
  }, [user]);

  return (
    <BrowserRouter>
      <Header user={user} />
      <Link user={user} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
