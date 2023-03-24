// import React, { components, useEffect, useState } from "react";
// import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Apple() {
  // GET 요청
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 30;
  const offset = (page - 1) * limit;
  const url = `http://192.168.31.151:8080/postAll?page=0`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // POST 요청
  const [write, setWrite] = useState([]);
  useEffect(() => {
    axios.post();
  });

  return (
    <div>
      <div>
        <div>글쓰기</div>
        <input type="text" />
        <button>post</button>
      </div>
      {data
        .slice(offset, offset + limit)
        .map(({ id, title, content, hit, writer }) => (
          <div>
            <div>
              <div style={{ fontWeight: "600", fontSize: "24px" }}>번호</div>
              <div>{id}</div>
            </div>
            <div>
              <div>제목</div>
              <div>{title}</div>
            </div>
            <div>
              <div>내용</div>
              <div>{content}</div>
            </div>
            <div>
              <div>작성자</div>
              <div>{writer}</div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Apple;
