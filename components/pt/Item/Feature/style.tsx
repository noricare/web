import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledTitleRoot = styled.h1`
  text-align: center;
  margin-bottom: 7.2rem;
`;

const StyledBoxRoot = styled.div`
  padding: 3rem 4.5rem;
  /*  width: 28rem;
  
  */
  border-radius: ${BorderRadius.regular};
  border: 3px solid ${Colors.blue600};
  box-shadow: ${DropShadow.regular};
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    ${Fonts.display2}
    color:${Colors.blue600};
  }

  span {
    ${Fonts.display1}
    color:${Colors.black};
    text-align: center;
  }

  ${applyMediaQuery('mobile')} {
    padding: 1.5rem;
    p {
      ${Fonts.display1}
    }

    span {
      ${Fonts.headline}
    }
  }
`;

export { StyledTitleRoot, StyledBoxRoot };
