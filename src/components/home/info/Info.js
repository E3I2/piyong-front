import React, { useEffect } from "react";
import styles from "./Info.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.body} id="slide">
      <div className={styles.item} data-aos="fade-up">
        <h1>국민 안전 지킴이</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Card;
