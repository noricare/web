import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledRoot = styled.div`
  background-color: ${Colors.gray100};
  width: fit-content;
  border-radius: ${BorderRadius.extraLarge};
  padding: 1rem 2rem;
`;

const StyledToggleElement = styled.span<{ state: boolean }>`
  color: ${(props) => (props.state ? `${Colors.blue600}` : `${Colors.black}`)};
  background-color: ${(props) => (props.state ? `${Colors.white}` : `${Colors.gray100}`)};
  ${Fonts.display2}
  padding:0.6rem 1rem;
  border-radius: ${BorderRadius.extraLarge};
`;

export { StyledRoot, StyledToggleElement };
