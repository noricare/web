import { StyleTitleRoot, StyledBoxRoot } from './style';
import { StyledTitle } from 'components/common';
import Image from 'next/image';

interface ICenterBox {
  src: string;
  width: number;
  height: number;
  label: string;
}

export const CenterTitle = () => {
  return (
    <StyleTitleRoot>
      <StyledTitle>
        <span>시설 단체 회원 맞춤</span> 재미있고 특색있는 노인 운동 루틴
      </StyledTitle>
      <StyledTitle>
        지도사와 섬세한 코칭 아래 활기찬 <span>시니어 피트니스 현장!</span>
      </StyledTitle>
    </StyleTitleRoot>
  );
};

export const CenterBox = ({ src, height, width, label }: ICenterBox) => {
  return (
    <StyledBoxRoot>
      <Image src={src} height={height} width={width} />
      <p>{label}</p>
    </StyledBoxRoot>
  );
};
