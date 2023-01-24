import { StyledRoot } from './style';
import Image from 'next/image';

export const ImageMain = () => {
  return (
    <StyledRoot>
      <Image src="/centerB2B.jpg" alt="노리케어 기관 수업" width="1650" height="810" />
    </StyledRoot>
  );
};
