import styles from "./Home.module.css";
import Animation from "../../components/home/animation/Animation";
import Info from "../../components/home/info/Info";
import MenuAni from "../../components/home/info/MenuAni";
import axios from "axios";
import Header from "../../components/common/header/Header";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";

function Home() {
  return (
    <>
      <Animation />
      <Info />
      <MenuAni />
    </>
  );
}

export default Home;
