import React, { useEffect, useState } from "react";
import styled from "styled-components";

function CmPost() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   fetch("");
  // });

  return (
    <div>
      <main>
        <div>
          <article>
            <p>1</p>
            <p>제목이다</p>
            <p>작성자</p>
            <p>23.03.01</p>
            <p>1</p>
            <p>0</p>
          </article>
          <Hr />
        </div>
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
