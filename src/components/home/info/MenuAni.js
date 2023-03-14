import styles from "./MenuAni.module.css";

function MenuAni() {
  return (
    <div className={styles.body}>
      <ul className={styles.ul}>
        <li style={{ position: "relative", zIndex: "6" }} className={styles.li}>
          <a href="#" className={styles.a}>
            HOME
          </a>
        </li>
        <li style={{ position: "relative", zIndex: "5" }} className={styles.li}>
          <a href="#" className={styles.a}>
            About
          </a>
        </li>
        <li style={{ position: "relative", zIndex: "4" }} className={styles.li}>
          <a href="#" className={styles.a}>
            Services
          </a>
        </li>
        <li style={{ position: "relative", zIndex: "3" }} className={styles.li}>
          <a href="#" className={styles.a}>
            Protfolio
          </a>
        </li>
        <li style={{ position: "relative", zIndex: "2" }} className={styles.li}>
          <a href="#" className={styles.a}>
            Our Team
          </a>
        </li>
        <li style={{ position: "relative", zIndex: "1" }} className={styles.li}>
          <a href="#" className={styles.a}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuAni;
