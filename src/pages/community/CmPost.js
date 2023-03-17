import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function CmPost() {
  const [list, setList] = useState([]);

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
  console.log(list);
  return (
    <div>
      <main>
        {list.slice(0, 5).map(({ id, title }) => (
          <div>
            <article
              key={id}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p>{id}</p>
              <NavLink to={`/community/${id}`}>
                <p>{title}</p>
              </NavLink>
              <p>작성자</p>
              <p>23.03.01</p>
              <p>1</p>
              <p>0</p>
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
