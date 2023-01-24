import { StyledRoot, StyledToggleElement } from './style';


interface IToggle{
  onClick:()=>void;
  state:boolean
}

export const Toggle = ({onClick, state}:IToggle) => {

  return (
    <StyledRoot>
      <StyledToggleElement onClick={onClick} state={state}>
        파견 수업
      </StyledToggleElement>
      <StyledToggleElement onClick={onClick} state={!state}>
        라이브 수업
      </StyledToggleElement>
    </StyledRoot>
  );
};
