// import styles from "./Home.module.css";
import Animation from "../../components/home/animation/Animation";
import Info from "../../components/home/info/Info";
import MenuAni from "../../components/home/info/MenuAni";
import React from "react";
// import Header from "../../components/common/header/Header";
// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import { Navigate, useLocation } from "react-router";

function Home() {
  // // 로그인 여부
  // const [user, setUser] = useState([]);

  // // 유저 토큰 여부
  // useEffect(() => {
  //   console.log("user 변경전전 :", user);
  //   if (localStorage.getItem("token")) {
  //     axios
  //       .get("https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/getuser", {
  //         method: "GET",
  //         headers: {
  //           Authorization: localStorage.getItem("token"),
  //         },
  //       })
  //       .then((res) => setUser(res.data));
  //     // .then((data) => setUser(data));
  //     // .then(console.log("user", user));
  //   }
  //   console.log(localStorage.getItem("token"));
  // }, [Navigate]);

  // useEffect(() => {
  //   console.log("user 변경됨 :", user);
  //   // window.location.reload();
  // }, [user]);

  return (
    <>
      {/* {user.role == "USER" ? <Header user={user} /> : <HeaderAdmin } */}
      {/* <Header user={user} /> */}
      <Animation />
      <Info />
      <MenuAni />
    </>
  );
}

export default Home;
