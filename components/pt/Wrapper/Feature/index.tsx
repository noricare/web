import { FeatureTitle, FeatureBox } from 'components/pt/Item';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';
import { PTFeature_ITEM } from 'constant';

export const FeatureWrapper = () => {
  return (
    <StyledRoot>
      <FeatureTitle />
      <FeatureBoxWrapper>
        {PTFeature_ITEM.map(({ label, description }, idx) => (
          <FeatureBox
            key={idx}
            src={`/B2C-feature/${idx}.png`}
            label={label}
            width="160"
            height="160"
            description={description}
          />
        ))}
      </FeatureBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

const FeatureBoxWrapper = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 30rem);
  ${applyMediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }


`;
