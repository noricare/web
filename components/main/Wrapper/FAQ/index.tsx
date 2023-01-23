import { COMMON_FAQ_ITEM } from 'constant/FAQItem';
import { FAQ } from 'components/common';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

export const FAQWrapper = () => {
  return (
    <StyledRoot>
      <TitleWrapper>노리케어 자주 묻는 질문</TitleWrapper>
      <ContentWrapper>
        {COMMON_FAQ_ITEM.map((item, idx) => (
          <FAQ question={item.q} answer={item.ans} key={item.q} />
        ))}
      </ContentWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.white};
  min-height: 75rem;
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
