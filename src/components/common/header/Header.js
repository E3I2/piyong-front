import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoPath from "./img/ppiyong.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const menuRef = useRef();
  useEffect(() => {
    menuRef.current.classList.add("active");
  }, []);

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
        <li className={styles.link}>로그인</li>
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

export default Header;
