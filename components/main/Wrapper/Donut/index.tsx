import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { DONUT_ITEM } from 'constant';
import { DonutChart, DonutTitle, DonutButton } from 'components/main/Item';

export const DonutWrapper = () => {
  return (
    <StyledRoot>
      <DonutHeadContainer>
        <DonutTitle/>
        <DonutButton/>
      </DonutHeadContainer>
      {DONUT_ITEM.map(({ percent, title, description }, idx) => (
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


const DonutHeadContainer=styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;