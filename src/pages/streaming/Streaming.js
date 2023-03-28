import React from "react";
import styles from "./Streaming.module.css";
import StreamingBoard from "./StreamingBoard";
import Category from "../../components/common/category/Category";

function Streaming() {
  return (
    <div>
      <Category category={"순찰하기 - 실시간 스트리밍"} text={"순찰하기"} />
      <div className={styles.main}>
        <div className={styles.body}>
          <iframe
            title="Streaming"
            src="http://192.168.31.168:8000/video_feed"
            className={styles.vod}
          ></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ssn4F9xuSx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className={styles.table}>
          <StreamingBoard />
        </div>
      </div>
    </div>
  );
}

export default Streaming;
