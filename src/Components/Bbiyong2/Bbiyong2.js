import React, { useEffect, useState } from 'react';
import styles from './Bbiyong2.module.css';
// import SearchButton from './search.png';
import MyResponsivePie from '../Charts/Charts';

import Mafia1 from './Mafia1.png';
import Mafia2 from './Mafia2.png';
import Mafia3 from './Mafia3.png';
import Mafia4 from './Mafia4.png';
import NoMafia from './NoMafia.png'

import { ExampleJson } from './ExampleJson';
import axios from 'axios';

function getMafiaImage(mafia) {
    switch (mafia) {
      case 'mafia_1':
        return Mafia1;
      case 'mafia_2':
        return Mafia2;
      case 'mafia_3':
        return Mafia3;
      case 'mafia_4':
        return Mafia4;
      default:
        return NoMafia;
    }
  }

  function Vod() {
    const [Info, setInfo] = useState([[]]);

    useEffect(() => {
      axios.get('http://192.168.31.142:8080/mafia-chart')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
      }, []);

    const latestData = Info[Info.length - 1];
    // const latestData = ExampleJson[ExampleJson.length - 1];

  
    const mafiaData = [
      {
        "id": "road1",
        "mafia": latestData.road1_mafia
      },
      {
        "id": "road2",
        "mafia": latestData.road2_mafia
      },
      {
        "id": "road3",
        "mafia": latestData.road3_mafia
      },
      {
        "id": "road4",
        "mafia": latestData.road4_mafia
      }
    ];

  

    return <div>
        <div className={styles.SearchSection}>
        {/* <button className={styles.SearchButton} onClick={scrollToRef}><img src={SearchButton} className={styles.SearchButton} alt="SearchButton"></img></button>
        <input className={styles.VodSearch} placeholder="키워드 검색"></input> */}
        
        </div>
        <div className={styles.BodySection}>
            <div className={styles.BodySectionTitle}>23.03.03 - 삐용이 출동</div>
            <div className={styles.BodySectionVod}>
                <div className={styles.BodySectionChartSection}>
                    <div className={styles.BodySectionChartTitle}>삐용이 차트</div>
                    <div className={styles.BodySectionChart}><MyResponsivePie></MyResponsivePie></div>
                </div>
                <div className={styles.BodySectionMafiaSection}>
                    <div className={styles.BodySectionMafiaTitle}>나타난 마피아들</div>
                    <div className={styles.BodySectionMafiaLine}>
                    <div className={styles.BodySectionMafiaRoadTitle1}>1번째 길</div>
                    <img src={getMafiaImage(mafiaData.find(data => data.id === "road1").mafia)} alt="mafia" className={styles.BodySectionMafiaRoadImg}/>
                    <div className={styles.BodySectionMafiaRoadTitle1}>2번째 길</div>
                    <img src={getMafiaImage(mafiaData.find(data => data.id === "road2").mafia)} alt="mafia" className={styles.BodySectionMafiaRoadImg}/>
                    <div className={styles.BodySectionMafiaRoadTitle1}>3번째 길</div>
                    <img src={getMafiaImage(mafiaData.find(data => data.id === "road3").mafia)} alt="mafia" className={styles.BodySectionMafiaRoadImg}/>
                    <div className={styles.BodySectionMafiaRoadTitle1}>4번째 길</div>
                    <img src={getMafiaImage(mafiaData.find(data => data.id === "road4").mafia)} alt="mafia" className={styles.BodySectionMafiaRoadImg}/>
                </div>
                </div>

            </div>
        </div>
        <div className={styles.BodyEndSection}>
        {/* <div className={styles.BodyEndSection} ref={scrollRef}>
            {/* <div className={styles.BodySearchResult}>23.03.03 - Title</div>
            <div className={styles.BodySearchResult2}>23.03.04 - Title</div>
            <div className={styles.BodySearchResult}>23.03.05 - TItle</div>
            <div className={styles.BodySearchResult2}>23.03.06 - Title</div> */}
        </div>

        

    </div>
};

export default Vod;