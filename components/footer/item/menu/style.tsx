import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
  color: ${Colors.gray300};
  ${Fonts.subhead3}
width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    margin: 0.5rem 0;
  }

  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead2}/*flex-direction: column;*/
  }
`;

export { StyledRoot };
