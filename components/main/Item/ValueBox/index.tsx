import { StyledRoot, ValueLabel, ValueDescription } from './style';
import { StyledTitle } from 'components/common/style';
import Image from 'next/image';

interface IValueBox {
  src: string;
  label: string;
  subTitle00: string;
  subTitle01: string;
  width: number;
  height: number;
}

export const ValueBox = ({ src, label, subTitle00, subTitle01, height, width }: IValueBox) => {
  return (
    <StyledRoot>
      <Image src={src} alt="노리케어 Logo" width={width} height={height} />
      <ValueLabel>{label}</ValueLabel>
      <ValueDescription>
        <p>{subTitle00}</p>
        <p>{subTitle01}</p>
      </ValueDescription>
    </StyledRoot>
  );
};

export const ValueTitle = () => {
  return (
    <>
      <StyledTitle>노리케어가 포기하지 않는</StyledTitle>
      <StyledTitle>
        <span>최고의 운동가치</span>
      </StyledTitle>
    </>
  );
};
