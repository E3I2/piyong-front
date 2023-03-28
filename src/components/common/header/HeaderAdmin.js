import React, { useState, useEffect, useRef } from "react";
import styles from "./HeaderAdmin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoPath from "./img/ppiyong.png";
import { NavLink } from "react-router-dom";
import Logout from "../../../pages/home/Logout";

function HeaderAdmin({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const menuRef = useRef();
  useEffect(() => {
    menuRef.current.classList.add("active");
  }, []);

  // 로그아웃 모달
  const [modal, setModal] = useState(false);
  const showModal = () => {
    setModal(true);
  };

  return (
    <nav className={styles.nav} id="nav">
      <NavLink to="/" style={{ textDecoration: "none", color: "#000" }}>
        <div className={styles.logoBox} id="logoBox">
          <img src={logoPath} alt="logo" className={styles.logoImg} />
          <div className={styles.titleBox}>
            <p className={styles.logoTitle}>PIYONG</p>
            <p className={styles.logoInfo}>둔산경찰서</p>
          </div>
        </div>
      </NavLink>
      <ul
        className={isOpen ? styles.active : styles.links}
        id="links"
        ref={menuRef}
        style={{ padding: "0" }}
      >
        <NavLink
          to="./recode"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <li className={styles.link}>순찰일지</li>
        </NavLink>
        <NavLink
          to="./request"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <li className={styles.link}>순찰요청</li>
        </NavLink>
        <NavLink
          to="./community"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <li className={styles.link}>커뮤니티</li>
        </NavLink>
        <NavLink
          to="./streaming"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <li className={styles.link}>순찰하기</li>
        </NavLink>
        <NavLink to="./admin" style={{ textDecoration: "none", color: "#000" }}>
          <li className={styles.link}>관리자페이지</li>
        </NavLink>
        <li className={styles.link}>
          <button onClick={showModal} className={styles.login}>
            {user.name}님
          </button>
          {modal && <Logout setModal={setModal} />}
        </li>
      </ul>
      <button
        onClick={() => toogleMenu()}
        className={styles.toogleBtn}
        id="toogleBtn"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
}

export default HeaderAdmin;
