import styled from "styled-components";
import { FaBomb } from "react-icons/fa";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Wrapper>
        <FaBomb size="5rem" />
        <h1>Oops! This is not what you are looking for.</h1>
        <StyledLink to="/home">Return To Homepage</StyledLink>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;

  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  animation: 1s ease-out 0s 1 slideInFromLeft;

  h1 {
    margin-top: 20px;
    font-size: 24px;
  }

  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  margin-top: 20px;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 0.2s ease-out 20ms;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: lightgray;
    transform: scale(1.1);
  }
`;

export default Error;
