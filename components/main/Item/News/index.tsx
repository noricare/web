import { StyledTitle } from 'components/common';
import Image from 'next/image';
import { StyledNewsBoxRoot, StyledTitleRoot } from './style';

interface INewsBox {
  src: string;
  label: string;
  description: string;
  width: number;
  height: number;
  url: string;
}
export const NewsTitle = () => {
  return (
    <StyledTitleRoot>
      <StyledTitle>
        <span>언론</span>에서 주목하는 <span>노리케어</span>
      </StyledTitle>
    </StyledTitleRoot>
  );
};

export const NewsBox = ({ src, height, width, label, description, url }: INewsBox) => {
  return (
    <StyledNewsBoxRoot>
      <Image src={src} height={height} width={width} alt={label}/>
      <p>{label}</p>
      <span>{description}</span>
      <a href={url} target="_blank">
        → 더보기
      </a>
    </StyledNewsBoxRoot>
  );
};
