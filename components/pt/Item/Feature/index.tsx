import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts, BorderRadius, DropShadow } from 'styles';
import { StyledTitle, ImageMain } from 'components/common';
import {
  StyledTitleRoot, StyledBoxRoot
} from "./style";

interface IFeatureBox {
  src: string;
  label: string;
  width: string;
  height: string;
  description: string;
}

export const FeatureTitle = () => {
  return (
    <StyledTitleRoot>
      <StyledTitle>
        {' '}
        <span>독보적인 </span>노리케어 방문 PT
      </StyledTitle>
      <StyledTitle>노인 운동 맞춤형 솔루션</StyledTitle>
    </StyledTitleRoot>
  );
};
export const FeatureBox = ({ src, label, width, height, description }: IFeatureBox) => {
  return (
    <StyledBoxRoot>
      <ImageMain src={src} width={width} height={height} alt={label} />
      <p>{label}</p>
      <span>{description}</span>
    </StyledBoxRoot>
  );
};
