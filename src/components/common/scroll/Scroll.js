import React, { useEffect } from "react";
import styles from "./Scroll.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Scroll() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.body}>
      <div style={{ width: "100px", height: "500px" }}></div>
      <div className={styles.item} data-aos="fade-up">
        1
      </div>
      <div className={styles.item} data-aos="fade-down">
        2
      </div>
      <div className={styles.item} data-aos="fade-right">
        3
      </div>
      <div className={styles.item} data-aos="fade-left">
        4
      </div>

      <div className={styles.item} data-aos="zoom-in">
        5
      </div>
      <div className={styles.item} data-aos="zoom-out">
        6
      </div>

      <div className={styles.item} data-aos="slide-up">
        7
      </div>

      <div className={styles.item} data-aos="flip-up">
        8
      </div>
      <div className={styles.item} data-aos="flip-down">
        9
      </div>
      <div className={styles.item} data-aos="flip-right">
        10
      </div>
      <div className={styles.item} data-aos="flip-left">
        11
      </div>
    </div>
  );
}

export default Scroll;
