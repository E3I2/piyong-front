import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "./Posts.module.css";
import Pagination from "./Pagination";


function Posts() {
  const [posts, setPosts] = useState([]);
  // const [limit, setLimit] = useState(10);
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  useEffect(() => {
    fetch(
      `https://port-0-pipi-6g2llfcg53ue.sel3.cloudtype.app/report-postAll`,
      {
        method: "GET",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => res.json())
      .then((posts) => {
        let count = posts.length;

        const posts2 = [];

        for (let p of posts) {
          if (count > 0) {
            p.num = count;
            posts2.push(p);
            count--;
          }
        }
        setPosts(posts2);
      });
  }, []);

  return (
    <div>
      <main>
        {posts
          .slice(offset, offset + limit)
          .map(({ id, title, comments, num }) => (
            // <div>
            //   <article key={id} className={styles.header}>
            <div key={id}>
              <article className={styles.header}>
                <div className={styles.num}>{num}</div>

                <Link to={`/request/${id}`} className={styles.link}>
                  {title}
                </Link>
                <div className={styles.state}>
                  {/* {comments.length == 0 ? ( */}
                  {comments.length === 0 ? (
                    <div className={styles.btn1}>답변대기</div>
                  ) : (
                    <div className={styles.btn2}>답변완료</div>
                  )}
                </div>
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
