import { Slogan, Description, Channel } from './item';
import { StyledFooter, StyledWrapper } from './style';

function MainFooter() {
  return (
    <StyledFooter>
      <StyledWrapper>
        <Channel />
        <Slogan />
      </StyledWrapper>
      <Description />
    </StyledFooter>
  );
}

export default MainFooter;
