import { useState } from 'react';
import { StyledRoot, QuestionWrapper, AnswerWrapper } from './style';

import Image from 'next/image';
interface IFAQ {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: IFAQ) => {
  const [showState, setShowState] = useState(false);

  const handleShowState = () => {
    setShowState(!showState);
  };

  return (
    <StyledRoot>
      <QuestionWrapper onClick={handleShowState}>
        {question}
        <Image src="/FAQCheck.png" alt="노리케어 FAQ" width="20" height="20" />
      </QuestionWrapper>
      <AnswerWrapper showState={showState}>{showState && <span>{answer}</span>}</AnswerWrapper>
    </StyledRoot>
  );
};
