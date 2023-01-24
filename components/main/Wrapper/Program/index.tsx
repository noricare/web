import Image from 'next/image';
import { ProgramTitle, ProgramBox } from '../../Item';
import { LiveProgram, GroupProgram, PersonalAppProgram } from 'constant';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

export const ProgramWrapper = () => {
  return (
    <StyledRoot>
      <ProgramTitle />
      <ProgramBoxWrapper>
        <UpperWrapper>
          <ImageWrapper>
            <Image src="/diagram/Left.png" alt="left asset" width="140" height="210" />
          </ImageWrapper>

          <ProgramBox
            label={LiveProgram.label}
            subTitle00={LiveProgram.subTitle00}
            subTitle01={LiveProgram.subTitle01}
            subTitle02={LiveProgram.subTitle02}
          />
          <ImageWrapper>
            <Image src="/diagram/Right.png" alt="right asset" width="140" height="210" />
          </ImageWrapper>
        </UpperWrapper>
        <MiddleWrapper>
          <ProgramBox
            label={GroupProgram.label}
            subTitle00={GroupProgram.subTitle00}
            subTitle01={GroupProgram.subTitle01}
            subTitle02={GroupProgram.subTitle02}
          />
          <ProgramBox
            label={PersonalAppProgram.label}
            subTitle00={PersonalAppProgram.subTitle00}
            subTitle01={PersonalAppProgram.subTitle01}
            subTitle02={PersonalAppProgram.subTitle02}
          />
        </MiddleWrapper>
        <BottomWrapper>
          <ImageWrapper>
            <Image src="/diagram/Under.png" alt="under asset" width="350" height="82" />
          </ImageWrapper>
        </BottomWrapper>
      </ProgramBoxWrapper>
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
    align-items: center;
  }
`;

const ProgramBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7.2rem 0;
  justify-content: flex-end;
  ${applyMediaQuery('mobile')} {
    width: fit-content;
    padding: 0;
  }
`;

const UpperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  ${applyMediaQuery('mobile')} {
    padding: 0.8rem 0;
  }
`;

const MiddleWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: row;
  width: 70rem;
  align-items: center;
  justify-content: space-between;
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
    padding: 0;
  }
`;

const BottomWrapper = styled.div`
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const ImageWrapper = styled.div`
  ${applyMediaQuery('mobile')} {
    display: none;
  }
`;
