import { StyledDonutChartRoot, DonutText, StyledTitleRoot, StyledButtonRoot } from './style';
import { StyledTitle } from 'components/common';

/**
 * 
 * 
 * 대한민국 NO.1 노인 운동 전문기관
 * 노인 맞춤 운동 처방
노리케어와 함께해요
 */

interface IDonutChart {
  percent: number;
  label: string;
  description: string;
}

export const DonutTitle = () => {
  return (
    <StyledTitleRoot>
      <StyledTitle>
        <span>국내 NO.1 &nbsp;</span>
        노인 운동 전문기관
      </StyledTitle>
      <StyledTitle>
        <span>노인 맞춤 운동 처방</span>
      </StyledTitle>
      <StyledTitle>노리케어와 함께 해요</StyledTitle>
    </StyledTitleRoot>
  );
};

export const DonutButton=()=>{

  const handleButtonClick=()=>{
    console.log("클릭");
    window.open('https://www.naver.com');
  }
  return (
    <StyledButtonRoot onClick={handleButtonClick}>
     상담하기
    </StyledButtonRoot>
  )
}

export const DonutChart = ({ percent, label, description }: IDonutChart) => {
  return (
    <StyledDonutChartRoot percent={percent}>
      <div className="svg-item">
        <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
          <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
          <circle
            className="donut-ring"
            cx="20"
            cy="20"
            r="15.91549430918954"
            fill="transparent"
            strokeWidth="3.5"
          ></circle>
          <circle
            className="donut-segment"
            cx="20"
            cy="20"
            r="15.91549430918954"
            fill="transparent"
            strokeWidth="3.5"
            strokeDasharray={`${percent} ${100 - percent}`}
            strokeDashoffset="25"
          ></circle>
          <g className="donut-text">
            <text y="45%" transform="translate(0, 2)">
              <tspan x="50%" textAnchor="middle" className="donut-percent">
                {percent}%
              </tspan>
            </text>
            <text y="55%" transform="translate(0, 2)">
              <tspan x="50%" textAnchor="middle" className="donut-data">
                {label}
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <DonutText>{description}</DonutText>
    </StyledDonutChartRoot>
  );
};
