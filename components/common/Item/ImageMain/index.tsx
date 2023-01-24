import { StyledRoot } from './style';
import Image from 'next/image';

interface IImageMain {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export const ImageMain = ({ src, alt, width, height }: IImageMain) => {
  return (
    <StyledRoot>
      <Image src={src} alt={alt} width={width} height={height} />
    </StyledRoot>
  );
};
