import { NAVIGATION_ITEM } from 'constant';
import NavItem from './NavItem';
import { StyledRoot } from './style';

interface INavMenu {
  isToggleOpen: boolean;
  onClick: () => void;
}

export const NavMenu = ({ isToggleOpen, onClick }: INavMenu) => {
  return (
    <StyledRoot isToggleOpen={isToggleOpen}>
      {NAVIGATION_ITEM.map((menu, idx) => (
        <li key={menu.text} onClick={onClick}>
          <NavItem text={menu.text} href={menu.href} />
        </li>
      ))}
    </StyledRoot>
  );
};
