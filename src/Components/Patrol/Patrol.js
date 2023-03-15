import React from 'react';
import styles from './Patrol.module.css';
import Board from '../Table/Board';

function Patrol(){
    return <div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.PatrolVodSection}>동영상 재생될 부분</div>
                <div className={styles.PatrolInfoSection}><Board/></div>
            </div>
        </div>
    </div>
}

export default Patrol;