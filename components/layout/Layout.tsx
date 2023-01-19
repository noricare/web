import MainNavigation from '../navigation';
import MainFooter from '../footer';

function Layout(props: any) {
  return (
    <>
      <MainNavigation />
      {props.children}

      <MainFooter />
    </>
  );
}

export default Layout;
