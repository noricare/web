import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius } from 'styles';

const StyledTitle = styled.p`
  color: ${Colors.black};
  ${Fonts.display3};
  span {
    color: ${Colors.blue600};
  }
  ${applyMediaQuery('mobile')} {
    ${Fonts.display2};
  }
`;

export { StyledTitle };
