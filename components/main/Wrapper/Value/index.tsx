import { ValueTitle, ValueBox } from '../../Item';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { VALUE_ITEM } from 'constant';

export const ValueWrapper = () => {
  return (
    <StyledRoot>
      <ValueTitle />
      <ValueBoxWrapper>
        {VALUE_ITEM.map((item, idx) => (
          <ValueBox
            key={item.label}
            src={item.src}
            label={item.label}
            subTitle00={item.subTitle00}
            subTitle01={item.subTitle01}
            height={item.height}
            width={item.width}
          />
        ))}
      </ValueBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.blue200}20;

  background-blend-mode: multiply;
  min-height: 75rem;
  display: flex;
  flex-direction: column;

  ${applyMediaQuery('mobile')} {
    padding: 3rem 0;
    align-items: center;
  }
`;
const ValueBoxWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 6.5rem;
  padding: 7.2rem 0;

  ${applyMediaQuery('mobile')} {
    padding: 2.5rem 0;
    grid-auto-flow: row;
    row-gap: 5.5rem;
  }
`;
