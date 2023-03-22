import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./Posts.module.css";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("http://192.168.31.151:8080/report-postAll", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbHNydWR0ajE1MjdAZ21haWwuY29tIiwiaWQiOjEsImV4cCI6MTY3OTY0MDk0MywidXNlcm5hbWUiOiJrYWthb18yNjk1NzU5MDgwIn0.NgNZTV2AKwbIFKDeONJXzm1Qu9d2ds4y9iNGnIe1er09eCCttJIXo6XkzRH5s6bG7IZCr4dRE5-8yRgUMrmV1g",

        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts);

  return (
    <div>
      {/* <label>
        페이지 당 표시할 게시물 수:&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label> */}

      <main>
        {posts.slice(offset, offset + limit).map(({ id, title }) => (
          <div>
            <article key={id} className={styles.header}>
              <div className={styles.num}>{id}</div>

              <Link to={`/request/${id}`} className={styles.link}>
                {title}
              </Link>
              <div className={styles.state}>진행상태</div>
            </article>
            <Hr />
          </div>
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
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

export default Posts;

// https://www.daleseo.com/react-pagination/
