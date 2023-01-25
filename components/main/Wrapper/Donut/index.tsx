import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { DONUT_ITEM } from 'constant';
import { DonutChart } from 'components/main/Item';

export const DonutWrapper = () => {
  return (
    <StyledRoot>
      {DONUT_ITEM.map(({percent,  title, description}, idx) => (
        <DonutChart percent={percent} key={idx} label={title} description={description} />
      ))}
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-color: ${Colors.white};
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;
