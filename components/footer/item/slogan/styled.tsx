import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
  color: ${Colors.black};
  ${Fonts.display3}
  span {
    color: ${Colors.blue600};
  }

  ${applyMediaQuery('mobile')} {
    ${Fonts.display2}
  }
`;

export { StyledRoot };
