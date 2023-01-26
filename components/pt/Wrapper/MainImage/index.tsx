import styled from '@emotion/styled';
import { applyMediaQuery, BorderRadius, Colors, DropShadow, Fonts } from 'styles';



import Image from 'next/image';

interface IImageMainWrapper {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export const ImageMainWrapper = ({ src, alt, width, height }: IImageMainWrapper) => {
  return (
    <div>
      <StyledRoot>

      <Image src={src} alt={alt} width={width} height={height} />
   


      <UnderTitleWrapper>
       라이브 영상으로 다양하게 만나다
       <StyledImageTitle>노리케어 라이브 수업</StyledImageTitle>
      </UnderTitleWrapper>

      </StyledRoot>

    </div>
  );
};


const StyledRoot = styled.div`
position: relative;	
  ${applyMediaQuery('mobile')} {
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

	bottom: 15%;
	right: 10%;
  transform: translate( 15%, 25% );
	position: absolute;
box-shadow: ${DropShadow.regular};
  color:${Colors.white};
  ${Fonts.display4}

  ${applyMediaQuery('mobile')} {
    ${Fonts.subhead3}
  }
`;
