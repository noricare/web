import styled from '@emotion/styled';
import { applyMediaQuery, BorderRadius, Colors, Fonts } from 'styles';

const StyledRoot = styled.div`
position: relative;	
  ${applyMediaQuery('mobile')} {
  }
`;

const UpperTitleWrapper=styled.div`

	bottom: 15%;
	right: 10%;
  transform: translate( 15%, 25% );
	position: absolute;

  color:${Colors.white};
  ${Fonts.display4}

  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead3}
  }
`;

const StyledImageTitle=styled.h1`
color:${Colors.blue600};
background-color: ${Colors.white};
text-align: center;
border-radius: ${BorderRadius.regular};
${Fonts.display5}
padding: 0.8rem 1rem;
width: fit-content;
margin: 0.8rem 0;
${applyMediaQuery('mobile')} {
  padding: 0.3rem 0.8rem;
    ${Fonts.subhead2}
    margin: 0.3rem 0;
  }
`;


const UnderTitleWrapper=styled.div`
	position: absolute;
	top: 10%;
	left: 10%;
  transform: translate( -15%, -20% );
  color:${Colors.white};
  ${Fonts.display4}
text-align: end;
  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead3}
  }


`;
export { StyledRoot, UpperTitleWrapper,StyledImageTitle, UnderTitleWrapper};
