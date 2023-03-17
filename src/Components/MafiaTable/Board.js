import React, { useEffect, useState} from "react";
import axios from 'axios';
import Tr from './Tr';
import styles from './Table.module.css';

const Board = () => {
  const [info, setInfo] = useState([]);
    
//   useEffect(() => {
//     setInterval(() => {
//     axios.get('http://192.168.31.142:8080/streaming')
//     // axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => setInfo(res.data))
//       .catch(err => console.log(err));
// }, 1000);
//   }, []);


  return (
    <div>
      <table className={styles.Table}>      
        <thead>
          <tr>
            <th className={styles.TableTitleSection}>ID</th>
            <th className={styles.TableTitleSection}>시간</th>
            <th className={styles.TableTitleSection}>마피아</th>
            <th className={styles.TableTitleSection}>도로 상태</th>
          </tr>
        </thead>
        <Tr info={info}/>
      </table>
    </div>
  );
};

export default Board;