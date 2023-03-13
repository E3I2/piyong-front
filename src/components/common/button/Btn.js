import styled from "styled-components";

const SimpleButton = styled.button`
  color: white;
  background-color: green;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
  width: 150px;
  height: 100px;
`;

const PrimaryButton = styled.button`
  color: ${(props) => (props.primary ? "yellow" : "black")};
  background-color: ${(props) => (props.primary ? "black" : "gray")};
`;

function Btn({ selectBtn, text }) {
  return (
    <div>
      {selectBtn == 1 && <SimpleButton>{text}</SimpleButton>}
      {selectBtn == 2 && <LargeButton>{text}</LargeButton>}
      {selectBtn == 3 && <PrimaryButton>{text}</PrimaryButton>}
      {selectBtn == 4 && <PrimaryButton>{text}</PrimaryButton>}
    </div>
  );
}

export default Btn;
