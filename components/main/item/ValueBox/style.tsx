import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius } from 'styles';

const StyledRoot = styled.div`
  background-color: ${Colors.blue100};
  padding: 1.5rem 2rem;
  border-radius: ${BorderRadius.regular};
  width: fit-content;
  img {
    border-radius: ${BorderRadius.regular};
  }
`;

const StyledTitle = styled.p`
  color: ${Colors.black};

  ${Fonts.display3};
  span {
    color: ${Colors.blue600};
  }
  ${applyMediaQuery('mobile')} {
    ${Fonts.display2};
  }
`;

const ValueLabel = styled.div`
  color: ${Colors.blue400};
  ${Fonts.display2}
`;
const ValueDescription = styled.div`
  ${Fonts.subhead3};
  color: ${Colors.gray350};
`;

export { StyledRoot, StyledTitle, ValueLabel, ValueDescription };
