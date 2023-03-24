import styled from "styled-components";

function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);
  console.log(numPages);
  return (
    <Div>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        &lt;
      </Button>
      {[...Array(numPages).keys()].map((_, i) => (
        <Button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          aria-current={page === i + 1 ? "page" : null}
        >
          {i + 1}
        </Button>
      ))}
      <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
        &gt;
      </Button>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: #007cba;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: gray;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #014364;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;
