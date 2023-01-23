import { StyledRoot,StyledAvater , StyledSpeechBubble} from './style';
import Image from 'next/image';


interface IReview{
  position:number
}
const ReviewAvater = () => {
  return    <StyledAvater><Image src='/main-slide/0.jpg' alt="노리케어 Logo" width="150" height="150" priority={true} /><p>충남 **복지관 관장</p></StyledAvater>

};

const ReviewSpeechBubble = () => {
  return <StyledSpeechBubble><p>참여율 자체가 달라요</p><span>
    운동프로그램이 다르면 얼마나 다르겠어 생각했는데 회원님들 표정 자체가
    달라졌어요. 몸이 훨씬 가볍다고 하시고 노리케어 하러 복지관 나오신다고
    하셔서 수업 개설하길 참 잘했다 싶어요
    운동프로그램이 다르면 얼마나 다르겠어 생각했는데 회원님들 표정 자체가
    달라졌어요. 몸이 훨씬 가볍다고 하시고 노리케어 하러 복지관 나오신다고
    하셔서 수업 개설하길 참 잘했다 싶어요
    운동프로그램이 다르면 얼마나 다르겠어 생각했는데 회원님들 표정 자체가
    달라졌어요. 몸이 훨씬 가볍다고 하시고 노리케어 하러 복지관 나오신다고
    하셔서 수업 개설하길 참 잘했다 싶어요
  </span></StyledSpeechBubble>
};


export const Review = ({position}:IReview) => {
  return (
    <StyledRoot position={position}>
      <ReviewAvater />
      <ReviewSpeechBubble />
    </StyledRoot>
  );
};
