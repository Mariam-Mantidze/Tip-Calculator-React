import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "../styles/GlobalStyles";
import Logo from "/images/logo.svg";
import InputSide from "./components/InputSide";
import Results from "./components/Results";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Container>
        <img src={Logo} alt="Logo os Splitter" />
        <Application>
          <InputSide />
          <Results />
        </Application>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 920px;
  text-align: center;
`;

const Application = styled.div`
  text-align: left;
  padding: 32px 32px 32px 48px;
  border-radius: 20px;
  display: flex;
  gap: 45px;
  margin-top: 87px;
  max-width: 920px;
  background: rgba(255, 255, 255, 1);
`;
