import React from 'react';
import styles from './Patrol.module.css';
import Board from '../MafiaTable/Board';

function Patrol(){
    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.PatrolVodSection}>
                    <iframe src='http://192.168.31.168:8000/video_feed' className={styles.Vod} ></iframe>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ssn4F9xuSx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                 </div>
                <div className={styles.PatrolInfoSection}><Board/></div>
            </div>
        </div>
    </div>
}

export default Patrol;