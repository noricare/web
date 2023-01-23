import { StyledTitle } from 'components/common';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

export const ReviewTitle = () => {
  return (
    <StyledRoot>
      <StyledTitle>
        <span> 믿음직스러운 노리케어</span>와
      </StyledTitle>
      <StyledTitle>
        시니어 운동을
        <span> 함께 만드는 </span>
        사람들
      </StyledTitle>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${applyMediaQuery('mobile')} {
    align-items: center;
  }
`;
