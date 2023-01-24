import { StyleTitleRoot, StyledBoxRoot } from './style';
import { StyledTitle } from 'components/common';
import Image from 'next/image';

interface IVODBox {
  src: string;
  width: number;
  height: number;
}

export const VODTitle = () => {
  return (
    <StyleTitleRoot>
      <StyledTitle>현장감 있는 영상 구성과 노인 건강 운동 시퀀스</StyledTitle>
      <StyledTitle>시설에서 다함께 노인 운동 후 차후 비교분석 결과 제공</StyledTitle>
    </StyleTitleRoot>
  );
};

export const VODBox = ({ src, height, width }: IVODBox) => {
  return (
    <StyledBoxRoot>
      <Image src={src} height={height} width={width} />
    </StyledBoxRoot>
  );
};
