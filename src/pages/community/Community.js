import Category from "../../components/common/category/Category";
import Button from "../../components/common/button/Button";
import styles from "./Community.module.css";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../server/config/Pagination";

function Community() {
  // GET 데이터 불러오기
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/postAll", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);
  console.log(list);

  // 검색 토글
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.classList.add("active");
  }, []);

  // 검색 기능
  const [userInput, setUserInput] = useState("");
  const getValue = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };
  const [search, getSearch] = useState([]);
  const searched = search.filter((item) =>
    item.name.toLowerCase().includes(userInput)
  );

  // ------------------------------

  return (
    <div>
      <Category category={"커뮤니티 - 동네 정보 공유"} text={"커뮤니티"} />
      <div className={styles.title}>
        <div style={{ position: "relative" }}>
          <button className={styles.glassBtn} onClick={() => toogleMenu()}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <div
            className={isOpen ? styles.active : styles.searchBox}
            ref={searchRef}
          >
            <input
              className={styles.searchInput}
              type="text"
              size="30"
              placeholder="검색어를 입력해 주세요."
              onChange={getValue}
            />
            <Button selectBtn={6} text={"검색"} />
          </div>
        </div>
        <span className={styles.btn}>
          <NavLink
            className={({ isActive }) =>
              "nav-link" + (isActive ? " click" : "")
            }
            to="/community-write"
            style={{ textDecoration: "none" }}
          >
            <Button selectBtn={1} text={"작성하기"} />
          </NavLink>
        </span>
      </div>
      <MainBox>
        <hr className={styles.hr} />
        <PostsBox>
          <header className={styles.header}>
            <div className={styles.number}>번호</div>
            <div className={styles.subject}>제목</div>
            <div className={styles.writer}>작성자</div>
            <div className={styles.createdAt}>작성일</div>
            <div className={styles.hits}>조회수</div>
          </header>
          <Hr />

          <main>
            {list.slice(offset, offset + limit).map(({ id, title, hit }) => (
              <div>
                <article key={id} className={styles.header2}>
                  <div className={styles.number}>{id}</div>
                  <NavLink
                    to={`/community/${id}`}
                    style={{ textDecoration: "none", color: "#000" }}
                    className={styles.subject}
                  >
                    <div>{title}</div>
                  </NavLink>
                  <div className={styles.writer}>작성자</div>
                  <div className={styles.createdAt}>23.03.22</div>
                  <div className={styles.hits}>{hit}</div>
                </article>
                <Hr />
              </div>
            ))}
          </main>

          <footer>
            <Pagination
              total={list.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </footer>
        </PostsBox>
        <hr className={styles.hr} />
      </MainBox>
    </div>
  );
}

const Hr = styled.hr`
  height: 0.8px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 0;
  margin: auto;
`;

const PostsBox = styled.div`
  margin: auto;
  width: calc(100% - 3%);
  height: 100%;
  box-shadow: 1px 1px 40px #909090;
  letter-spacing: -0.5px;
`;

const MainBox = styled.div`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export default Community;
