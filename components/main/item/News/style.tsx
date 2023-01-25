import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledTitleRoot = styled.h1`
  padding-bottom: 7.2rem;
`;

const StyledNewsBoxRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    border-radius: ${BorderRadius.regular};
  }
  p {
    color: ${Colors.blue300};
    ${Fonts.display1};
  }

  span,
  a {
    color: ${Colors.gray300};
    ${Fonts.subhead3};
  }

  a {
    color: ${Colors.gray350};
    ${Fonts.subhead3};
  }
`;

export { StyledNewsBoxRoot, StyledTitleRoot };
