import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
  color: ${Colors.black};
  ${Fonts.display2}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width:fit-content;
  ${applyMediaQuery('mobile')} {
    ${Fonts.display2}
  }
`;

const TextWrapper = styled.div`
  ${Fonts.display1}
  span {
    color: ${Colors.blue600};
  }
`;

export { StyledRoot, TextWrapper };
