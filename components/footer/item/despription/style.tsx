import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
  color: ${Colors.gray300};
  ${Fonts.subhead2}

  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead1}
    flex-direction: column;
  }
`;

export { StyledRoot };
