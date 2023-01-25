import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledTitleRoot = styled.h1`
  text-align: center;
  margin-bottom: 7.2rem;
`;

const StyledBoxRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const BarWrapper = styled.div`
  ${applyMediaQuery('mobile')} {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  width: 58rem;
  background-color: ${Colors.gray100};
  border-radius: ${BorderRadius.regular};
  box-shadow: ${DropShadow.regular};
  padding: 3rem;
  margin: 2.5rem 0 2.5rem 7.2rem;
  ${applyMediaQuery('mobile')} {
    margin: auto;
    padding: 1.5rem;
  }
`;

const ContentTitle = styled.p`
  color: ${Colors.blue600};
  ${Fonts.display2}
  ${applyMediaQuery('mobile')} {
    ${Fonts.display1}
  }
`;
const ContentDescription = styled.span`
  color: ${Colors.black};
  ${Fonts.headline}
  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead3}
  }
`;

export { StyledTitleRoot, StyledBoxRoot, ContentWrapper, BarWrapper, ContentTitle, ContentDescription };
