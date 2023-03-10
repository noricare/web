import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';
import { NewsBox, NewsTitle } from 'components/main/Item';
import { News_ITEM } from 'constant/newsItem';

export const NewsWrapper = () => {
  return (
    <StyledRoot>
      <NewsTitle />
      <NewsContainer>
        {News_ITEM.map(({ label, description, width, height, src, url }, idx) => (
          <NewsBox
            key={idx}
            label={label}
            description={description}
            width={width}
            height={height}
            src={src}
            url={url}
          />
        ))}
      </NewsContainer>
    </StyledRoot>
  );
};

const StyledRoot = styled.section``;

const NewsContainer = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(3, minmax(20rem, 1fr));
  ${applyMediaQuery('mobile')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
