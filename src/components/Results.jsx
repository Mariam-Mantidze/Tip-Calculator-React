import styled from "styled-components";

export default function Results() {
  return (
    <StyledResult>
      <ResultContainer>
        <p>
          Tip Amount <br /> <span>/ person</span>{" "}
        </p>
        <p className="amount">$0.00</p>
      </ResultContainer>

      <ResultContainer>
        <p>
          Total <br /> <span>/ person</span>{" "}
        </p>
        <p className="amount">$0.00</p>
      </ResultContainer>

      <Button btnType="reset">Reset</Button>
    </StyledResult>
  );
}

const StyledResult = styled.div`
  width: 414px;
  border-radius: 15px;
  background-color: rgba(0, 71, 75, 1);
  padding: 40px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  & p {
    color: rgba(255, 255, 255, 1);
  }

  & span {
    font-size: 13px;
    color: rgba(127, 157, 159, 1);
  }

  & .amount {
    color: rgba(38, 194, 174, 1);
    font-size: 48px;
  }
`;

const Button = styled.button`
  width: ${(props) => (props.btnType === "reset" ? "100%" : "")};
  background-color: ${(props) =>
    props.btnType === "reset" ? "rgba(13, 104, 109, 1)" : "red"};

  border: none;
  padding: 9px;
  cursor: pointer;
  border-radius: 5px;
  justify-self: flex-end;
  margin-top: ${(props) => (props.btnType === "reset" ? "97px" : "")};

  font-size: 20px;
  color: ${(props) =>
    props.btnType === "reset" ? "  rgba(0, 71, 75, 1);" : "fff"};
`;
