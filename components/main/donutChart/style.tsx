import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

const StyledRoot = styled.div`
  .svg-item {
    width: 25%;
    animation: donutfade 1s;
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
    stroke:${Colors.gray100};
  }

  .donut-segment {
    transform-origin: center;
    stroke:${Colors.blue600};
    animation: donut1 3s;
  }



  .donut-percent {
    animation: donutfadelong 1s;
    font-size:0.5rem;
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
      stroke-dasharray: 69, 31;
    }
  }


  .donut-text {
    fill:${Colors.blue600};
  }
  .donut-percent {
 
    transform: translateY(0.5em);

  }

  .donut-data {
    font-size: 0.35rem;
    font-weight: bold;
    transform: translateY(0.5em);
    text-align: center;
    text-anchor: middle;
    /*color: ${Colors.gray300};*/
    fill: ${Colors.gray400};
    animation: donutfadelong 1s;
  }
`;

export { StyledRoot };
