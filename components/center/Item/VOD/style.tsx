import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyleTitleRoot = styled.div`
  text-align: center;
  margin: 5rem 0 8rem 0;
`;

const StyledBoxRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${Fonts.display1}
  color:${Colors.gray300};
  img {
    border-radius: ${BorderRadius.regular};
  }
  p {
    margin-top: 0.5rem;
  }

  ${applyMediaQuery('mobile')} {
    ${Fonts.headline}
  }
`;

export { StyleTitleRoot, StyledBoxRoot };
