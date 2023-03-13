import React, { useEffect } from "react";
import styles from "./Card.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Card() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.item} data-aos="fade-up">
        1
      </div>
      <div>dddd</div>
      <div>dddd</div>
    </div>
  );
}

export default Card;
