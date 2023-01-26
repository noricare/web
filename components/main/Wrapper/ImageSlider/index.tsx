import styled from '@emotion/styled';
import { Carousel } from 'react-responsive-carousel';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { MainImage_ITEM } from 'constant/main-image-slider';
import { ImageSlider } from 'components/main/Item';

export const ImageSliderWrapper = () => {
  return (
    <StyledRoot>
      <Carousel showThumbs={false} showArrows={true} autoPlay={true} showStatus={false}>
        {MainImage_ITEM.map(({ srl, label, width, height, subTitle00, subTitle01 }, idx) => (
          <ImageSlider
            key={idx}
            src={srl}
            label={label}
            width={width}
            height={height}
            subTitle00={subTitle00}
            subTitle01={subTitle01}
          />
        ))}
      </Carousel>
    </StyledRoot>
  );
};

const StyledRoot = styled.div`
  padding: 0 !important;
  background-color: ${Colors.blue100};
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
  }
`;
