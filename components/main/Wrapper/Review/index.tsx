import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { ReviewTitle } from 'components/main/item';
import { Review } from 'components/common';

const list = [1, 2, 3, 4, 5];

export const ReviewWrapper = () => {
  return (
    <StyledRoot>
      <ReviewTitle />
      {list.map((item, idx) => (
        <Review />
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.blue200}20;
  min-height: 75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
  }
`;
