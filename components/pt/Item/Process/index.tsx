import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';
import { StyledTitle,ImageMain } from 'components/common';
import { StyledTitleRoot,StyledBoxRoot,ContentWrapper, BarWrapper, ContentTitle, ContentDescription } from './style';

interface IProcessBox {

  label: string;

  description: string;
}

export const ProcessTitle = () => {
  return (
    <StyledTitleRoot>
      <StyledTitle>
        노리케어
        <span> 방문 PT </span>만의 
      </StyledTitle>
      <StyledTitle>
      빈틈없는 <span>노인 건강관리 프로세스</span>
      </StyledTitle>
    </StyledTitleRoot>
  );
};
export const ProcessBox = ({  label,  description }: IProcessBox) => {
  return (
    <StyledBoxRoot>
      <BarWrapper>
      <ImageMain src="/b2c-processBar.png" width='30' height='180' alt="노리케어 방문 PT ProcessBar"/>
      </BarWrapper>

      <ContentWrapper>
      <ContentTitle>{label}</ContentTitle>
      <ContentDescription>{description}</ContentDescription>
      </ContentWrapper>

    </StyledBoxRoot>
  );
};
