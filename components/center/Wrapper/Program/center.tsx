import { CenterTitle, CenterBox } from '../../Item';
import { CenterLive_ITEM } from 'constant/center-live-item';

import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

export const CenterWrapper = () => {
  return (
    <StyledRoot>
      <CenterTitle />
      <CenterBoxWrapper>
        {CenterLive_ITEM.map(({ src, label, width, height }, idx) => (
          <CenterBox src={src} label={label} width={width} height={height} key={idx} />
        ))}
      </CenterBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CenterBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(15rem, 1fr));
  grid-gap: 4rem;
`;
