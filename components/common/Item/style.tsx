import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius } from 'styles';


const StyledRoot=styled.div`
display: flex;
flex-direction: column;
width:60rem;
border-top: 3px solid ${Colors.gray350};
padding: 1.5rem;


`

const QuestionWrapper=styled.div`
${Fonts.display2}
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

const AnswerWrapper=styled.div<{showState:boolean}>`
${Fonts.body2}
padding: ${(props)=>props.showState? "0.5rem 0" : "0"};

`;

export {StyledRoot, QuestionWrapper,AnswerWrapper}