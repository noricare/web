import styled from '@emotion/styled';
import { Carousel } from 'react-responsive-carousel';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { MainImage_ITEM } from 'constant/main-image-slider';
import { ImageSlider } from 'components/main/item';

export const ImageSliderWrapper = () => {
  return (
    <StyledRoot>
      <Carousel showThumbs={false} showArrows={false} autoPlay={true} showStatus={false}>
        {MainImage_ITEM.map((item, idx) => (
          <ImageSlider
            key={item.label}
            src={item.srl}
            label={item.label}
            width={item.width}
            height={item.height}
            subTitle00={item.subTitle00}
            subTitle01={item.subTitle01}
          />
        ))}
      </Carousel>
    </StyledRoot>
  );
};

const StyledRoot = styled.section`
  padding: 0 !important;
  background-color: ${Colors.blue100};
  ${applyMediaQuery('mobile')} {
    flex-direction: column;
    .slide {
      div {
        height: 100%;

        span {
          height: 100% !important;
        }
      }
    }
  }
`;
