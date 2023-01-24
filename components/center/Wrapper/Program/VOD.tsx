import { VODTitle, VODBox } from '../../Item';
import { CenterVOD_ITEM } from 'constant';

import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';

export const VODWrapper = () => {
  return (
    <StyledRoot>
      <VODTitle />

      <VODBOXWrapper>
        {CenterVOD_ITEM.map(({ src, height, width }, idx) => (
          <VODBox src={src} height={height} width={width} />
        ))}
      </VODBOXWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VODBOXWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4rem;
  ${applyMediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4rem;
  }
`;
