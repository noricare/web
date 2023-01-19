import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

const StyledRoot = styled.ul<{ isToggleOpen: boolean }>`
  list-style: none;
  display: flex;
  justify-content: space-between;
  width: 61.7rem;
  li {
    text-align: center;
    margin: 0.8rem 0;
    &:hover {
      cursor: pointer;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    display: block;
  }
  ${applyMediaQuery('mobile')} {
    display: ${(props) => (props.isToggleOpen ? 'block' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export { StyledRoot };
