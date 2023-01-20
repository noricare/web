import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  /*레이아웃 관련*/
  padding: 2.7rem 10rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* 배경 */
  background-color: ${Colors.blue100};
  /* 하단 고정 */

  ${applyMediaQuery('mobile')} {
    padding: 1.5rem 3rem;
    flex-direction: column;
  }
`;

const SloganWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;
  justify-content: space-around;

  ${applyMediaQuery('mobile')} {
    width: 20rem;
    padding: 1.5rem 0;
    justify-content: space-between;
    flex-direction: row;
  }
`;
export { StyledFooter, SloganWrapper, MenuWrapper };
