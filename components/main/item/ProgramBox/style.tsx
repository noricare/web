import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledRoot = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProgramLabel = styled.div`
  background-color: ${Colors.blue100};
  box-shadow: ${DropShadow.regular};
  margin-bottom: 1.5rem;
  ${Fonts.display2}
  color:${Colors.blue500};
  padding: 1.2rem 4.1rem;
  border-radius: ${BorderRadius.regular};
  ${applyMediaQuery('mobile')} {
    padding: 0.8rem 1.5rem;
    align-items: center;
    ${Fonts.display1}
    margin:0.5rem 0;
  }
`;

const ProgramDescripition = styled.div`
  ${Fonts.subhead2}
  display: flex;
  flex-direction: column;
  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem 0;
  }
  ${applyMediaQuery('mobile')} {
    p {
      padding: 0.5rem 0;
    }
  }
`;

const PrgramText = styled.span`
  padding-left: 0.5rem;
`;
export { StyledRoot, ProgramLabel, ProgramDescripition, PrgramText };
