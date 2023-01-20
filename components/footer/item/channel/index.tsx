import Image from 'next/image';
import { StyledRoot } from './style';

export const Channel = () => {
  return (
    <StyledRoot>
      <Image src="/naver.jpg" alt="노리케어 네이버 블로그" width={25} height={25} />
      <Image src="/youtube.jpg" alt="노리케어 유투브" width={25} height={25} />
      <Image src="/instar.jpg" alt="노리케어 인스타그램" width={25} height={25} />
    </StyledRoot>
  );
};
