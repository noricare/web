import { applyMediaQuery, Colors, Fonts } from 'styles';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
  width: 20rem;
  height: 13rem;
  ${applyMediaQuery('mobile')} {
  }
`;

const LogoWrapper = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export { StyledRoot, LogoWrapper, LinkWrapper };
