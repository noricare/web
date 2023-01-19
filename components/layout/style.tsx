import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledMain = styled.main`
  /*레이아웃 관련*/
  padding: 2.7rem 10rem;
  width: 100%;

  ${applyMediaQuery('mobile')} {
    padding: 1.5rem 3rem;
  }
`;

const StyledWrapper = styled.div``;

export { StyledMain, StyledWrapper };
