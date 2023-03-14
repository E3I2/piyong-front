import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoPath from "./img/ppiyong.png";

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
      <div className={styles.logoBox} id="logoBox">
        <img src={logoPath} alt="logo" className={styles.logoImg} />
        <div className={styles.titleBox}>
          <p className={styles.logoTitle}>PIYONG</p>
          <p className={styles.logoInfo}>둔산경찰서</p>
        </div>
      </div>
      <ul
        className={isOpen ? styles.active : styles.links}
        id="links"
        ref={menuRef}
        style={{ padding: "0" }}
      >
        <li className={styles.link}>순찰일지</li>
        <li className={styles.link}>순찰요청</li>
        <li className={styles.link}>커뮤니티</li>
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
