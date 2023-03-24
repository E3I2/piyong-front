import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import styles from "./CmPost.module.css";
// import Pagination from "../../server/config/Pagination";

function CmPost({ id, title, hit }) {
  const [list, setList] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("http://192.168.31.151:8080/postAll", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",

        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  return (
    <div>
      <main>
        {list.slice(offset, offset + limit).map(({ id, title, hit }) => (
          <div>
            <article key={id} className={styles.header}>
              <div className={styles.number}>{id}</div>
              <NavLink
                to={`/community/${id}`}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <div className={styles.subject}>{title}</div>
              </NavLink>
              <div className={styles.writer}>작성자</div>
              <div className={styles.createdAt}>23.03.22</div>
              <div className={styles.hits}>{hit}</div>
            </article>
            <Hr />
          </div>
        ))}
      </main>
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

export default CmPost;
