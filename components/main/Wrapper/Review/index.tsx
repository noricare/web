import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { ReviewTitle } from 'components/main/item';
import { Review } from 'components/common';

const list = [1, 2, 3, 4, 5];

export const ReviewWrapper = () => {
  return (
    <StyledRoot>
      <ReviewTitle />
      <ReviewContainer>
      {list.map((item, idx) => (
        <Review position={idx}/>
      ))}
      </ReviewContainer>

    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.blue200}20;
  min-height: 75rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;



  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
  }

`;


const ReviewContainer=styled.div`
width: 100%;

${applyMediaQuery('mobile')} {
  width: fit-content;
  }
`;