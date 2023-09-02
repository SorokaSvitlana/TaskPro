import { BtnCloseBlack } from 'components/buttons/buttons';
import {
  BtnBox,
  BtnReset,
  ColorOptionLabel,
  ResetBox,
  ResetTitle,
  Title,
  TitleBox,
  Container,
  CloseButton,
} from './Filters.styled';

function Filters({ onClick }) {
  return (
    <Container>
      <TitleBox>
        <Title>Filters</Title>
        <CloseButton type="button" onClick={onClick}>
          <BtnCloseBlack />
        </CloseButton>
      </TitleBox>
      <ResetBox>
        <ResetTitle>Lable color</ResetTitle>
        <BtnReset>Show all</BtnReset>
      </ResetBox>
      <BtnBox>
        <ColorOptionLabel className="blue">
          <button type="radio" name="priority" value="low">
            High
          </button>
        </ColorOptionLabel>
        <ColorOptionLabel className="red">
          <button type="radio" name="priority" value="medium">
            Medium
          </button>
        </ColorOptionLabel>
        <ColorOptionLabel className="green">
          <button type="radio" name="priority" value="high">
            Low
          </button>
        </ColorOptionLabel>
        <ColorOptionLabel className="gray">
          <button type="radio" name="priority" value="without">
            Without
          </button>
        </ColorOptionLabel>
      </BtnBox>
    </Container>
  );
}

export default Filters;
