import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import AdminMapping from "./AdminMapping";
// import AdminPost from './AdminPost';
import AdminModal from "./AdminModal";
import styles from "./AdminTable.module.css";

const AdminBoard = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(3);

  useEffect(() => {
    if (searchKeyword === "") {
      axios
        .get("https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/userlist")
        .then((res) => setInfo(res.data))
        .catch((err) => console.log(err));
      return;
    }
    let finfo = info.filter((aInfo) =>
      aInfo[searchCategory].toLowerCase().includes(searchKeyword)
    );
    setInfo(finfo);
  }, [searchCategory, searchKeyword]);

  const handleSave = (data) => {
    //데이터 수정하기
    if (data.id) {
      //수정 데이터에는 id가 존재
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                username: data.username,
                email: data.email,
                role: data.role,
              }
            : row
        )
      );
    } else {
      //바로 추가하기
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
      setInfo((info) =>
        info.concat({
          id: nextId.current,
          name: data.name,
          username: data.username,
          email: data.email,
          role: data.role,
        })
      );
      nextId.current += 3;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      username: item.username,
      email: item.email,
      role: item.role,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <select
          className={styles.searchOpt}
          onChange={(e) => setSearchCategory(e.target.value)}
        >
          <option value="name">이름</option>
          <option value="username">UserName</option>
          <option value="email">이메일</option>
          <option value="role">역활</option>
        </select>
        <input
          onChange={(e) => setSearchKeyword(e.target.value)}
          className={styles.searchInput}
        ></input>
        <button className={styles.searchBtn}>검색</button>
      </div>
      <br />
      <br />
      <div className={styles.title}>리스트</div>
      <table className={styles.tr}>
        <thead>
          <tr>
            <th className={styles.td}>Id.</th>
            <th className={styles.td}>Name</th>
            <th className={styles.td}>UserName</th>
            <th className={styles.td}>Email</th>
            <th className={styles.td}>Role</th>
            <th className={styles.td}>Edit & Delete</th>
          </tr>
        </thead>
        <AdminMapping
          info={info}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </table>
      {/* <AdminPost onSaveData={handleSave} /> */}
      {modalOn && (
        <AdminModal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default AdminBoard;
