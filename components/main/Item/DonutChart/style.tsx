import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

const StyledRoot = styled.div<{ percent: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  .svg-item {
    width: 29.5rem;
    animation: donutfade 1s;
    ${applyMediaQuery('mobile')} {
      width: 20rem;
    }
  }

  @keyframes donutfade {
    /* this applies to the whole svg item wrapper */
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }

  .donut-ring {
    stroke: ${Colors.gray100};
  }

  .donut-segment {
    transform-origin: center;
    stroke: ${Colors.blue600};
    animation: donut1 4s;
  }

  .donut-percent {
    animation: donutfadelong 1s;
    font-size: 0.5rem;
    font-weight: bold;
  }

  @keyframes donutfadelong {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes donut1 {
    0% {
      stroke-dasharray: 0, 100;
    }
    100% {
      stroke-dasharray: ${(props) => props.percent}, ${(props) => 100 - props.percent};
    }
  }

  .donut-text {
    fill: ${Colors.blue600};
  }
  .donut-percent {
    /*transform: translateY(0.5em);*/
  }

  .donut-data {
    font-size: 0.35rem;
    font-weight: bold;
    transform: translateY(0.5em);
    text-align: center;
    text-anchor: middle;
    fill: ${Colors.gray400};
    animation: donutfadelong 1s;
  }
`;

const DonutText = styled.p`
  ${Fonts.display3}
  ${applyMediaQuery('mobile')} {
    ${Fonts.display2}
  }
`;
export { StyledRoot, DonutText };
