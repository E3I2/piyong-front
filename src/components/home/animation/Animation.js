import styles from "./Animation.module.css";
import cloudsPath from "./img/clouds.png";
import buildingsPath from "./img/buildings.png";
import roadPath from "./img/road.png";
import policeCarPath from "./img/police-car.png";

function Animation() {
  return (
    <>
      <section>
        <img src={cloudsPath} alt="clouds" id="clouds" />
        <img src={buildingsPath} alt="buildings" id="buildings" />
        <a href="#" id="btn">
          Explore
        </a>
        <img src={roadPath} alt="road" id="road" />
        <img src={policeCarPath} alt="police-car" id="car" />
      </section>
      <div class="sec" id="sec">
        <h2>Parallax Scrolling Effects</h2>
      </div>
    </>
  );
}

export default Animation;
