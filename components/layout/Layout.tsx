import MainNavigation from '../navigation';
import MainFooter from '../footer';

function Layout(props: any) {
  return (
    <div>
      <MainNavigation />
      <main>{props.children}</main>
      <MainFooter />
    </div>
  );
}

export default Layout;
