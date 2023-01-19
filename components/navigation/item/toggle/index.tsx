import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { applyMediaQuery, Colors, Fonts } from 'styles';

interface IToggleBtn {
  onClick: () => void;
  isToggleOpen: boolean;
}

export const ToggleBtn = ({ onClick, isToggleOpen }: IToggleBtn) => {
  return (
    <button className="menuToggleBtn" onClick={onClick}>
      {isToggleOpen ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
    </button>
  );
};
