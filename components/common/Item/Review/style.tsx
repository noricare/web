import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledRoot = styled.div<{ position: number }>`
  display: flex;
  width: 100%;
  flex-direction: ${(props) => (props.position % 2 == 0 ? 'row' : 'row-reverse')};
  align-items: space-between;
  padding-bottom: 6.5rem;

  ${applyMediaQuery('mobile')} {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledAvater = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;
  img {
    border-radius: 50%;
    box-shadow: ${DropShadow.regular};
  }

  p {
    padding: 0.8rem;
    ${Fonts.display1}
    color:${Colors.gray300};
  }
`;
const StyledSpeechBubble = styled.div<{ position: number }>`
  border-radius: ${BorderRadius.large};
  border: solid ${Colors.blue300} 3px;
  box-shadow: ${DropShadow.regular};
  background-color: ${Colors.white};
  width: 80%;
  padding: 1.5rem 2.5rem;
  margin: 0 2.5rem;
  ${applyMediaQuery('mobile')} {
    width: fit-content;
  }
  p {
    ${Fonts.display2}
    padding-bottom: 1rem;
  }

  span {
    ${Fonts.headline}
  }
`;

export { StyledRoot, StyledAvater, StyledSpeechBubble };
