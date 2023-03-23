import { NavLink } from "react-router-dom";

function LoginSuccess() {
  const onClick = () => {
    return window.location.reload();
  };

  return (
    <>
      <NavLink to={`/`}>
        메인 페이지로 돌아가기
        <button onClick={onClick}>Click</button>
      </NavLink>
    </>
  );
}

export default LoginSuccess;
