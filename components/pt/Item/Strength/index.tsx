import { StyledTitleRoot, StyledBoxRoot } from './style';
import { StyledTitle } from 'components/common';

interface IStrengthBox {
  label: string;
  description: string;
}

export const StrengthTitle = () => {
  return (
    <StyledTitleRoot>
      <StyledTitle>
        남다른 <span>노인 홈 트레이닝</span>
      </StyledTitle>
      <StyledTitle>
        <span>인지 및 신체 기능 맞춤형</span> 방문 PT
      </StyledTitle>
    </StyledTitleRoot>
  );
};

export const StrengthBox = ({ label, description }: IStrengthBox) => {
  return (
    <StyledBoxRoot>
      <p>{label}</p>
      <span>{description}</span>
    </StyledBoxRoot>
  );
};
