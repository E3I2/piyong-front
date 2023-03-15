import React from 'react';
import styles from './Bbiyong2.module.css';
import SearchButton from './search.png';
import MyResponsivePie from '../Charts/Charts';

import Mafia1 from './Mafia1.png';
import Mafia2 from './Mafia2.png';
import Mafia3 from './Mafia3.png';
import Mafia4 from './Mafia4.png';

function Vod(){


    return <div>
        <div className={styles.SearchSection}>
        <button className={styles.SearchButton}><img src={SearchButton} className={styles.SearchButton} alt="SearchButton"></img></button>
        <input className={styles.VodSearch} placeholder="키워드 검색"></input>
        
        </div>
        <div className={styles.BodySection}>
            <div className={styles.BodySectionTitle}>23.03.03 - Title</div>
            <div className={styles.BodySectionVod}>
                <div className={styles.BodySectionChartSection}>
                    <div className={styles.BodySectionChartTitle}>삐용이 차트</div>
                    <div className={styles.BodySectionChart}><MyResponsivePie></MyResponsivePie></div>
                </div>
                <div className={styles.BodySectionMafiaSection}>
                    <div className={styles.BodySectionMafiaTitle}>나타난 마피아들</div>
                    <div className={styles.BodySectionMafiaLine}>
                        <div className={styles.BodySectionMafiaRoadTitle1}>1번째 길</div>
                        <img src={Mafia1} alt="Mafia1" className={styles.BodySectionMafiaRoadImg}></img>
                        <div className={styles.BodySectionMafiaRoadTitle1}>2번째 길</div>
                        <img src={Mafia2} alt="Mafia2" className={styles.BodySectionMafiaRoadImg}></img>
                        <div className={styles.BodySectionMafiaRoadTitle1}>3번째 길</div>
                        <img src={Mafia3} alt="Mafia3" className={styles.BodySectionMafiaRoadImg}></img>
                        <div className={styles.BodySectionMafiaRoadTitle1}>4번째 길</div>
                        <img src={Mafia4} alt="Mafia4" className={styles.BodySectionMafiaRoadImg}></img>
                </div>
                </div>

            </div>
        </div>
        <div className={styles.BodyEndSection}>
            <div className={styles.BodySearchResult}>23.03.03 - Title</div>
            <div className={styles.BodySearchResult2}>23.03.04 - Title</div>
            <div className={styles.BodySearchResult}>23.03.05 - TItle</div>
            <div className={styles.BodySearchResult2}>23.03.06 - Title</div>
        </div>

        

    </div>
};

export default Vod;