import { Toggle } from '../../Item';
import { CenterWrapper } from './center';
import { VODWrapper } from './VOD';
import { useState } from 'react';
import styled from '@emotion/styled';

export const ProgramWrapper = () => {
  const [toggleState, setToogleState] = useState(true);

  const handleToggleClick = () => {
    setToogleState(!toggleState);
  };
  return (
    <StyledRoot>
      <Toggle onClick={handleToggleClick} state={toggleState} />
      {toggleState && <CenterWrapper />}
      {!toggleState && <VODWrapper />}
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
