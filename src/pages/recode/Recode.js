import React, { useEffect, useState } from "react";
import styles from "./Recode.module.css";
// import SearchButton from './search.png';
import MyResponsivePie from "./Charts";
import Category from "../../components/common/category/Category";

import Mafia1 from "./Mafia1.png";
import Mafia2 from "./Mafia2.png";
import Mafia3 from "./Mafia3.png";
import Mafia4 from "./Mafia4.png";
import NoMafia from "./NoMafia.png";

// import { ExampleJson } from './ExampleJson';
import axios from "axios";

function getMafiaImage(mafia) {
  switch (mafia) {
    case "mafia_1":
      return Mafia1;
    case "mafia_2":
      return Mafia2;
    case "mafia_3":
      return Mafia3;
    case "mafia_4":
      return Mafia4;
    default:
      return NoMafia;
  }
}

function Recode() {
  const [Info, setInfo] = useState([[]]);

  useEffect(() => {
    axios
      .get("https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/mafia-chart")
      .then((res) => setInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  const latestData = Info[Info.length - 1];

  const mafiaData = [
    {
      create_at: latestData.create_at,
      id: "road1",
      mafia: latestData.road1_mafia,
    },
    {
      create_at: latestData.create_at,
      id: "road2",
      mafia: latestData.road2_mafia,
    },
    {
      create_at: latestData.create_at,
      id: "road3",
      mafia: latestData.road3_mafia,
    },
    {
      create_at: latestData.create_at,
      id: "road4",
      mafia: latestData.road4_mafia,
    },
  ];

  let today = new Date(latestData.create_at).toLocaleDateString();

  return (
    <div>
      <Category category={"순찰일지"} text={"순찰일지"} />
      <div className={styles.main}>
        <div className={styles.title}>{today} 삐용이 순찰 일지</div>
        <div className={styles.body}>
          <div className={styles.chartArea}>
            <div className={styles.chartTitle}>삐용이 차트</div>
            <div className={styles.chart}>
              <MyResponsivePie></MyResponsivePie>
            </div>
          </div>
          <div className={styles.resultArea}>
            <div className={styles.resultTitle}>나타난 마피아들</div>
            <div className={styles.resultBody}>
              <div className={styles.resultSubTitle}>1번째 길</div>
              <img
                src={getMafiaImage(
                  mafiaData.find((data) => data.id === "road1").mafia
                )}
                alt="mafia"
                className={styles.img}
              />
              <div className={styles.resultSubTitle}>2번째 길</div>
              <img
                src={getMafiaImage(
                  mafiaData.find((data) => data.id === "road2").mafia
                )}
                alt="mafia"
                className={styles.img}
              />
              <div className={styles.resultSubTitle}>3번째 길</div>
              <img
                src={getMafiaImage(
                  mafiaData.find((data) => data.id === "road3").mafia
                )}
                alt="mafia"
                className={styles.img}
              />
              <div className={styles.resultSubTitle}>4번째 길</div>
              <img
                src={getMafiaImage(
                  mafiaData.find((data) => data.id === "road4").mafia
                )}
                alt="mafia"
                className={styles.img}
              />
              <div className={styles.resultSubTitle}>마피아</div>
              {/* <img src={Mafia1} className={styles.img}></img><img src={Mafia2} className={styles.img}></img><img src={Mafia3} className={styles.img}></img><img src={Mafia4} className={styles.img}></img> */}
              <img src={Mafia1} className={styles.img} alt="1번 마피아"></img>
              <img src={Mafia2} className={styles.img} alt="2번 마피아"></img>
              <img src={Mafia3} className={styles.img} alt="3번 마피아"></img>
              <div className={styles.number}>1번 2번 3번</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recode;
