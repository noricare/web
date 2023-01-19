import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  /*레이아웃 관련*/
  padding: 2.7rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* 배경 */
  background-color: ${Colors.blue100};
  /* 하단 고정 */

  ${applyMediaQuery('mobile')} {
    padding: 1.5rem 3rem;
    flex-direction: column;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  justify-content: space-between;
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;

export { StyledFooter, StyledWrapper };
