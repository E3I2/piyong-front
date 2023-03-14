import React, { useEffect } from "react";
import styles from "./Info.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.body} id="godyoonho">
      <div className={styles.item} data-aos="fade-up">
        <h1>시민들의 안전 지킴이</h1>
      </div>
    </div>
  );
}

export default Card;
