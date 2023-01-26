import { StyledRoot, UpperTitleWrapper,StyledImageTitle , UnderTitleWrapper} from './style';
import Image from 'next/image';

interface IImageMain {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export const ImageMain = ({ src, alt, width, height }: IImageMain) => {
  return (
    <div>
      <StyledRoot>

      <Image src={src} alt={alt} width={width} height={height} />
   


      <UpperTitleWrapper>
       라이브 영상으로 다양하게 만나다
       <StyledImageTitle>노리케어 라이브 수업</StyledImageTitle>
      </UpperTitleWrapper>
      <UnderTitleWrapper>
       라이브 영상으로 다양하게 만나다
       <StyledImageTitle>노리케어 라이브 수업</StyledImageTitle>
      </UnderTitleWrapper>
      </StyledRoot>

    </div>
  );
};


