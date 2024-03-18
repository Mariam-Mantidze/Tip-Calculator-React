import styled from "styled-components";
import DollarIcon from "/images/icon-dollar.svg";
import PersonIcon from "/images/icon-person.svg";

export default function InputSide() {
  const btnsArr = ["5%", "10%", "15%", "25%", "50%"];

  return (
    <Form>
      <InputContainer>
        <Label htmlFor="bill">Bill</Label>
        <Input id="bill" type="number" placeholder="0" />
        <img src={DollarIcon} alt="dollar icon" />
      </InputContainer>

      <InputContainer>
        <Label htmlFor="">Select Tip%</Label>
        <ButtonContainer>
          {btnsArr.map((btn, index) => (
            <button key={index}>{btn}</button>
          ))}

          <input type="number" placeholder="0" />
        </ButtonContainer>
      </InputContainer>

      <InputContainer>
        <Label htmlFor="people">Number of People</Label>
        <Input id="people" type="number" placeholder="0" />
        <img src={PersonIcon} alt="person icon" />
      </InputContainer>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Label = styled.label`
  font-weight: 700;
  margin-bottom: 16px;
  color: rgba(94, 122, 125, 1);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;

  & img {
    position: absolute;
    top: 45px;
    left: 19px;
    /* width: 9px; */
  }
`;

const Input = styled.input`
  background: rgba(243, 249, 250, 1);
  border: none;
  border-radius: 5px;
  padding: 6px 17px;
  text-align: right;
  font-weight: 700;
  font-size: 24px;
  outline: none;
  color: rgba(0, 71, 75, 1);

  &::placeholder {
    color: rgba(0, 71, 75, 1);
    opacity: 0.35;
  }

  &::-webkit-inner-spin-button {
    appearance: none;
  }
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 14px;

  align-items: center;
`;
