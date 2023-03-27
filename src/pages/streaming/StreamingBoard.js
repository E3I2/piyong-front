import React, { useEffect, useState} from "react";
import axios from 'axios';
import StreamingMapping from "./StreamingMapping";
import styles from './Table.module.css';

const StreamingBoard = () => {
  const [info, setInfo] = useState([]);
    
  useEffect(() => {
    setInterval(() => {
    axios.get('http://192.168.31.142:8080/streaming')
    // axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setInfo(res.data))
      .catch(err => console.log(err));
}, 5000);
  }, []);

  return (
    <div>
      <table className={styles.table}>      
        <thead>
          <tr>
            <th className={styles.title}>시간</th>
            <th className={styles.title}>마피아</th>
            <th className={styles.title}>도로 상태</th>
          </tr>
        </thead>
        <StreamingMapping info={info}/>
      </table>
    </div>
  );
};

export default StreamingBoard;