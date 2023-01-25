import { StyledRoot, TextWrapper } from './styled';
import { Logo } from 'constant';
import { Channel } from '../channel';

export const Slogan = () => {
  return (
    <StyledRoot>
      <Logo width={200} height={55} />
      <TextWrapper>
        <p>놀이처럼 즐겁게 노인을 이롭게 만듭니다</p>
        <p>
          <span>시니어 전문 맞춤 운동프로그램</span>
        </p>
        <Channel />
      </TextWrapper>
    </StyledRoot>
  );
};
