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
            <Button key={index}>{btn}</Button>
          ))}

          <Input btnType="custom" type="number" placeholder="Custom" />
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
  grid-template-columns: repeat(2, 1fr) 118px;
  gap: 14px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 6px 17px;
  border: none;
  border-radius: 5px;
  background: #00474b;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: 0.2s;
`;
