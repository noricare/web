import { FAQ } from 'components/common/Item/FAQ';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

interface FAQ {
  question: string;
  answer: string;
}

interface IFAQWrapper {
  title: string;
  item: FAQ[];
}
export const FAQWrapper = ({ title, item }: IFAQWrapper) => {
  return (
    <StyledRoot>
      <TitleWrapper>{title} 자주 묻는 질문</TitleWrapper>
      <ContentWrapper>
        {item.map(({ answer, question }, idx) => (
          <FAQ question={question} answer={answer} key={idx} />
        ))}
      </ContentWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
  }
`;

const TitleWrapper = styled.div`
  ${Fonts.display3}
  color:${Colors.blue600};
  padding-bottom: 7.2rem;
`;

const ContentWrapper = styled.div`
  border-bottom: 3px solid ${Colors.gray350};
  border-top: 3px solid ${Colors.gray350};

  div:first-child {
    border: none;
  }
`;
