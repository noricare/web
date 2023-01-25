import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

const StyledTitleRoot = styled.div`
  margin-bottom: 7.2rem;
`;

const StyledBoxRoot = styled.div`
width: 25rem;
height: 25rem;
border-radius: 50%;
padding:3.5rem;
border: 3px solid ${Colors.blue600};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
  margin-bottom: 1.5rem;
  ${Fonts.display2}
  color:${Colors.blue600};
}

span{
  ${Fonts.display1}
  color:${Colors.black};
  text-align: center;
}
`;

export { StyledTitleRoot, StyledBoxRoot };
