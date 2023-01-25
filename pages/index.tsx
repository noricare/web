import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { FAQWrapper } from 'components/common';
import { COMMON_FAQ_ITEM } from 'constant';
import {
  DonutWrapper,
  ImageSliderWrapper,
  ValueWrapper,
  ProgramWrapper,
  ReviewWrapper,
  NewsWrapper,
} from 'components/main';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

const Home: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="노리케어 | 국내 최대 규모 노인 맞춤형 건강 프로그램 | noricare"
        description="노인 신체 및 인체 기능 기반 복지 기관 및 방문 PT 맞춤형 운동 처방 솔루션, 노리케어 (noricare)"
        canonical="https://www.noricare.kr/"
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://example.com/another',
          title: '노리케어 | 국내 최대 규모 노인 맞춤형 건강 프로그램 | noricare',
          description: '노인 신체 및 인체 기능 기반 복지 기관 및 방문 PT 맞춤형 운동 처방 솔루션, 노리케어 (noricare)',
          images: [
            {
              url: 'https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2bea55a8-9f05-4642-935b-48e329c8594a%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8_8453.png&blockId=7483eb22-8b89-4356-a740-c907bb3595cf&width=2400',
              width: 800,
              height: 600,
              alt: '노리케어 (noricare)',
            },
          ],
        }}
      />
      <HomeMain>
        <ImageSliderWrapper />
        <DonutWrapper />
        <ValueWrapper />
        <ProgramWrapper />
        <ReviewWrapper />
        <NewsWrapper />
        <FAQWrapper title="노리케어" item={COMMON_FAQ_ITEM} />
      </HomeMain>
    </div>
  );
};

export default Home;

export const HomeMain = styled.main`
  section {
    /*레이아웃 관련*/
    padding: 10.5rem 10rem;
    min-height: 75rem;
    ${applyMediaQuery('mobile')} {
      padding: 2.5rem 3rem;
    }
  }
`;
