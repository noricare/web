import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledRoot = styled.div``;

const StyledToggleElement = styled.span<{ state: boolean }>`
  color: ${(props) => (props.state ? `${Colors.blue600}` : `${Colors.black}`)};
`;

export { StyledRoot, StyledToggleElement };
