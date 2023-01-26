import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { DONUT_ITEM } from 'constant';
import { DonutChart, DonutTitle, DonutButton } from 'components/main/Item';

export const DonutWrapper = () => {
  return (
    <StyledRoot>
      <DonutHeaderContainer>
        <DonutTitle/>
        <DonutButton/>
      </DonutHeaderContainer>
      <DonutChartContainer>
      {DONUT_ITEM.map(({ percent, title, description }, idx) => (
        <DonutChart percent={percent} key={idx} label={title} description={description} />
      ))}
      </DonutChartContainer>

    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${Colors.white};
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;


const DonutHeaderContainer=styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;

const DonutChartContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;