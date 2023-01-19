import Image from 'next/image';
import { StyledRoot, LogoWrapper, LinkWrapper } from './style';
import { Logo } from 'constant/Logo';

export const Channel = () => {
  return (
    <StyledRoot>
      <LogoWrapper>
        <Logo width={200} height={65} />
      </LogoWrapper>
      <LinkWrapper>
        <Image src="/naver.jpg" alt="노리케어 네이버 블로그" width={45} height={45} />
        <Image src="/youtube.jpg" alt="노리케어 유투브" width={45} height={45} />
        <Image src="/instar.jpg" alt="노리케어 인스타그램" width={45} height={45} />
      </LinkWrapper>
    </StyledRoot>
  );
};
