import React, { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
        <div>LOGO</div>
      </div>
      <ul
        className={isOpen ? styles.active : styles.links}
        id="links"
        ref={menuRef}
      >
        <li className={styles.link}>순찰일지</li>
        <li className={styles.link}>순찰요청</li>
        <li className={styles.link}>커뮤니티</li>
        <li className={styles.link}>순찰하기</li>
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
