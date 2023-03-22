import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Link from "./pages/home/Link";
import HeaderAdmin from "./components/common/header/HeaderAdmin";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from "react-router";
import Home from "./pages/home/Home";

function App() {
  // 로그인 여부
  const [user, setUser] = useState([]);

  useEffect(() => {
    console.log("user 변경전전 :", user);

    // 유저 토큰 여부
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
  }, []);

  useEffect(() => {
    console.log("user 변경됨 :", user);
    // window.location.reload();
  }, [user]);

  return (
    <BrowserRouter>
      <Header user={user} />
      {/* {user.role == "manager" ? <HeaderAdmin /> : <Header user={user} />} */}
      <Link />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
