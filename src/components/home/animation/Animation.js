import { useEffect } from "react";
import styles from "./Animation.module.css";
import cloudsPath from "./img/clouds.png";
import buildingsPath from "./img/buildings.png";
import roadPath from "./img/road.png";
import policeCarPath from "./img/police-car.png";

function Animation() {
  useEffect(() => {
    let clouds = document.getElementById("clouds");
    let buildings = document.getElementById("buildings");
    let road = document.getElementById("road");
    let car = document.getElementById("car");
    let btn = document.getElementById("btn");

    window.addEventListener("scroll", function () {
      let value = window.scrollY;
      clouds.style.left = value * 0.25 + "px";
      buildings.style.top = value * 0.5 + "px";
      road.style.top = value * 0 + "px";
      car.style.marginRight = value * 4 + "px";
      btn.style.marginTop = value * 1.5 + "px";
    });
  }, []);

  return (
    <div className={styles.body}>
      <section className={styles.section}>
        <img
          src={cloudsPath}
          alt="clouds"
          id="clouds"
          className={styles.clouds}
        />
        <img
          src={buildingsPath}
          alt="buildings"
          id="buildings"
          className={styles.buildings}
        />
        <a href="#slide" id="btn" className={styles.btn}>
          시작하기
        </a>
        <img src={roadPath} alt="road" id="road" className={styles.road} />
        <img
          src={policeCarPath}
          alt="police-car"
          id="car"
          className={styles.car}
        />
      </section>
    </div>
  );
}

export default Animation;
