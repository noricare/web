import { StyledRoot } from './style';

export const DonutChart = () => {
  return (
    <StyledRoot>
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
            strokeDasharray="69 31"
            strokeDashoffset="25"
          ></circle>
          <g className="donut-text">
            <text y="45%" transform="translate(0, 2)">
              <tspan x="50%" textAnchor="middle" className="donut-percent">
                69%
              </tspan>
            </text>
            <text y="55%" transform="translate(0, 2)">
              <tspan x="50%" textAnchor="middle" className="donut-data">
                압도적인 지속성
              </tspan>
            </text>
          </g>
        </svg>
      </div>
      <p>노리케어를 계속하고 싶다</p>
    </StyledRoot>
  );
};
