import React from 'react';
import styles from './Streaming.module.css';
import StreamingBoard from './StreamingBoard';
import Category from '../../components/common/category/Category';

function Streaming(){
    return <div>
        <Category category={"출동 / 실시간 스트리밍"} text={"실시간"} />
      <div className={styles.title}>
      </div>
        <div className={styles.LineSection}>
            <div className={styles.PatrolSection}>
                <div className={styles.PatrolVodSection}>
                    <iframe title='Streaming' src='http://192.168.31.168:8000/video_feed' className={styles.Vod} ></iframe>
                    {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ssn4F9xuSx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                 </div>
                <div className={styles.PatrolInfoSection}><StreamingBoard/></div>
            </div>
        </div>
    </div>
}

export default Streaming;