import { ProcessBox, ProcessTitle } from 'components/pt/Item';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';
import { PTProcess_ITEM } from 'constant';

export const ProcessWrapper = () => {
  return (
    <StyledRoot>
      <ProcessTitle />
      <ProcessBoxWrapper>
        {PTProcess_ITEM.map(({ label, description }, idx) => (
          <ProcessBox label={label} description={description} key={idx}/>
        ))}
      </ProcessBoxWrapper>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  background-color: ${Colors.blue200}20;
`;

const ProcessBoxWrapper = styled.div``;
