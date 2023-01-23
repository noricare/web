import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius } from 'styles';

const StyledRoot = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
`;


const StyledAvater = styled.div`
display: flex;

flex-direction: column;

align-items: center;
img{
  border-radius:50%;
}

p {
  padding: 0.8rem;
  ${Fonts.display1}
  color:${Colors.gray300};
}

`;
const StyledSpeechBubble =styled.div`
  border-radius:${BorderRadius.large};
  border: solid ${Colors.blue300} 3px;
  width: 60rem;
  padding: 1.5rem 2.5rem;

  p{
    ${Fonts.display2}
    padding-bottom: 1rem;
  }

  span{
    ${Fonts.headline}
  }
`;

export { StyledRoot,StyledAvater , StyledSpeechBubble};
