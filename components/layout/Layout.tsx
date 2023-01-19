import MainNavigation from '../navigation';
import MainFooter from '../footer';
import { StyledMain, StyledWrapper } from './style';

function Layout(props: any) {
  return (
    <>
      <StyledWrapper>
        <MainNavigation />
        <StyledMain>{props.children}</StyledMain>
      </StyledWrapper>
      <MainFooter />
    </>
  );
}

export default Layout;
