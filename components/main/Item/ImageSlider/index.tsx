import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { StyledRoot } from './style';
import Image from 'next/image';
interface IImageSlider {
  src: string;
  label: string;
  subTitle00: string;
  subTitle01: string;
  width: number;
  height: number;
}

export const ImageSlider = ({ src, label, subTitle00, subTitle01, width, height }: IImageSlider) => {
  return (
    <StyledRoot>
      <Image src={src} alt={label} width={width} height={height} />
      {/*<TextWrapper>
        <p>{subTitle00}</p>
        <p>{subTitle01}</p>
        <LabelWrapper>{subTitle01}</LabelWrapper>
      </TextWrapper>*/}
    </StyledRoot>
  );
};
