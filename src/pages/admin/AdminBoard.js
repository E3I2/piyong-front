import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import AdminMapping from './AdminMapping';
import AdminPost from './AdminPost';
import AdminModal from './AdminModal';
import styles from './AdminTable.module.css';

const AdminBoard = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  const [ searchKeyword, setSearchKeyword ] = useState("")
  const [ searchCategory, setSearchCategory ] = useState("name")

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

//더미 데이터 호출

  // useEffect(() => {
  //   if(searchKeyword === ""){
  //     axios.get('http://localhost:8080/users')
  //       .then(res => setInfo(res.data))
  //       .catch(err => console.log(err));
      
  //       return;
  //   }
  //   axios.post('http://localhost:8080/users/search', {
  //     keyword: searchKeyword,
  //     category: searchCategory
  //   })
  //     .then(res => setInfo(res.data))
  //     .catch(err => console.log(err));
  // }, [searchCategory, searchKeyword])

  useEffect(() => {
    if (searchKeyword === "") {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => setInfo(res.data))
        .catch(err => console.log(err));
      return;
    }
    let finfo = info.filter(aInfo => aInfo[searchCategory].toLowerCase().includes(searchKeyword))
    setInfo(finfo)
  }, [searchCategory, searchKeyword, info])

  

  const handleSave = (data) => {
    //데이터 수정하기
    if (data.id) { //수정 데이터에는 id가 존재
      setInfo(
        info.map(row => data.id === row.id ? {
          id: data.id,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website,
        } : row))

    } else { //바로 추가하기
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo(info => info.concat(
        {
          id: nextId.current,
          name: data.name,
          email: data.email,
          phone: data.phone,
          website: data.website
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }


  return (
    <div className={styles.MainSection}>
      <div className={styles.MainSearchSection}>
      <select className={styles.MainSearchOption} onChange={e => setSearchCategory(e.target.value)}>
        <option value="name">이름</option>
        <option value="email">이메일</option>
        <option value="website">웹사이트</option>
      </select>
      <input onChange={e => setSearchKeyword(e.target.value)} className={styles.MainSearch}></input>
      <button className={styles.MainSearchButton}>검색</button>
      </div>
      <br/><br/>
      <div className={styles.MainTitle}>리스트</div>
      <table className={styles.TrSection}>
        <thead>
          <tr>
            <th className={styles.Section}>Id.</th>
            <th className={styles.Section}>Name</th>
            <th className={styles.Section}>Email</th>
            <th className={styles.Section}>Phone No.</th>
            <th className={styles.Section}>Website</th>
            <th className={styles.Section}>Edit & Delete</th>
          </tr>
        </thead>
        <AdminMapping info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </table>
      <AdminPost onSaveData={handleSave} />
      {modalOn && <AdminModal selectedData={selected} handleCancel={handleCancel} 
      handleEditSubmit={handleEditSubmit} />}
    </div>
  );
};

export default AdminBoard;