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
      {NAVIGATION_ITEM.map(({ text, href }, idx) => (
        <li key={idx} onClick={onClick}>
          <NavItem text={text} href={href} />
        </li>
      ))}
    </StyledRoot>
  );
};
