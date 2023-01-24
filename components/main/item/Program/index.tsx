import Image from 'next/image';
import {
  StyledProgramTitleContainer,
  StyledProgramContainer,
  ProgramLabel,
  ProgramDescripition,
  PrgramText,
} from './style';
import { StyledTitle } from 'components/common';

interface IProgramBox {
  label: string;
  subTitle00: string;
  subTitle01: string;
  subTitle02: string;
}

export const ProgramBox = ({ label, subTitle00, subTitle01, subTitle02 }: IProgramBox) => {
  return (
    <StyledProgramContainer>
      <ProgramLabel>{label}</ProgramLabel>
      <ProgramDescripition>
        <p>
          <Image src="/diagram/CheckMark.png" alt="check asset" width="20" height="20" />
          <PrgramText>{subTitle00} </PrgramText>
        </p>
        <p>
          <Image src="/diagram/CheckMark.png" alt="check asset" width="20" height="20" />
          <PrgramText>{subTitle01} </PrgramText>
        </p>
        <p>
          <Image src="/diagram/CheckMark.png" alt="check asset" width="20" height="20" />
          <PrgramText>{subTitle02} </PrgramText>
        </p>
      </ProgramDescripition>
    </StyledProgramContainer>
  );
};

export const ProgramTitle = () => {
  return (
    <StyledProgramTitleContainer>
      <StyledTitle>다채롭고 편리한 노리케어</StyledTitle>
      <StyledTitle>
        다양한 환경과 조건
        <span> 맞춤형 수업</span>
      </StyledTitle>
      <StyledTitle>
        <span>원스톱 패키지 </span>
        운동 프로그램
      </StyledTitle>
    </StyledProgramTitleContainer>
  );
};
