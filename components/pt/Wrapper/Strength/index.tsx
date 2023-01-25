import { StrengthTitle, StrengthBox } from 'components/pt/Item';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';
import { PTStrength_ITEM } from 'constant';

export const StrengthWrapper = () => {
  return (
    <StyledRoot>
      <StrengthTitle />
      <StrengthBoxWrapper>
        {PTStrength_ITEM.map(({ label, description }, idx) => (
          <StrengthBox
          key={idx}

            label={label}

            description={description}
          />
        ))}
      </StrengthBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
`;

const StrengthBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  ${applyMediaQuery('mobile')} {
    grid-gap: 1.5rem;
  }
`;
