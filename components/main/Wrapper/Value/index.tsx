import { ValueTitle, ValueBox } from '../../Item';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { VALUE_ITEM } from 'constant';

export const ValueWrapper = () => {
  return (
    <StyledRoot>
      <ValueTitle />
      <ValueBoxWrapper>
        {VALUE_ITEM.map(({ src, label, subTitle00, subTitle01, height, width }, idx) => (
          <ValueBox
            key={idx}
            src={src}
            label={label}
            subTitle00={subTitle00}
            subTitle01={subTitle01}
            height={height}
            width={width}
          />
        ))}
      </ValueBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.blue200}20;

  background-blend-mode: multiply;
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
