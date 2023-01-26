import styled from '@emotion/styled';
import { applyMediaQuery, BorderRadius, Colors, DropShadow, Fonts } from 'styles';

const StyledRoot = styled.div`
  /*width: 100%;*/
  span {
    width: 100% !important;
  }
`;

{
  /* const TextWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
  position: absolute;
top:65%;
left:10rem;
  color:${Colors.orange100};
  ${Fonts.display5}

    ${applyMediaQuery('mobile')} {
    left:3rem;
    bottom:5rem;
      ${Fonts.subhead2}
  }
`;

const LabelWrapper=styled.p`
color:${Colors.blue600};
${Fonts.display6}
background-color: ${Colors.white};
padding: 0.8rem 1.5rem;
box-shadow: ${DropShadow.regular};
border-radius: ${BorderRadius.regular};
margin-top: 1.5rem;
    ${applyMediaQuery('mobile')} {
      padding:0rem 0.8rem;
      margin-top: 0.5rem;
      ${Fonts.subhead2}
  }
`;*/
}

export { StyledRoot };
//export { StyledRoot, TextWrapper, LabelWrapper };
