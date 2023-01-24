import { Slogan, Description, Channel, Menu } from './Item';
import { StyledFooter, SloganWrapper, MenuWrapper } from './style';

function MainFooter() {
  return (
    <StyledFooter>
      <SloganWrapper>
        <Slogan />
      </SloganWrapper>
      <MenuWrapper>
        <Menu />
      </MenuWrapper>
      <Description />
    </StyledFooter>
  );
}

export default MainFooter;
