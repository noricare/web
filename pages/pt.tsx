import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { HomeMain } from '.';
import { ImageMain, FAQWrapper } from 'components/common';
import { COMMON_FAQ_ITEM } from 'constant/FAQItem';
import { FeatureWrapper, StrengthWrapper, ProcessWrapper } from 'components/pt/Wrapper';

const Pt: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="노리케어 | 노인 방문 PT 운동 프로그램 | noricare"
        description="방문 PT 노인 건강 관리 및 재활 프로그램"
        canonical="https://www.noricare.kr/pt"
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://www.noricare.kr/pt',
          title: '노리케어 | 노인 방문 PT 운동 프로그램 | noricare',
          description: '방문 PT 노인 건강 관리 및 재활 프로그램',
          images: [
            {
              url: 'https://oopy.lazyrockets.com/api/v2/notion/image?src=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F2bea55a8-9f05-4642-935b-48e329c8594a%2F%E1%84%80%E1%85%B3%E1%84%85%E1%85%AE%E1%86%B8_8453.png&blockId=7483eb22-8b89-4356-a740-c907bb3595cf&width=2400',
              width: 800,
              height: 600,
              alt: '노리케어 (noricare) 노인 복지 기관 수업',
            },
          ],
        }}
      />

      <HomeMain>
        <ImageMain src="/ptB2C.jpg" alt="노리케어 방문 PT" width="1650" height="810" />
        <StrengthWrapper />
        <FeatureWrapper />
        <ProcessWrapper />
        {/*<FAQWrapper title="방문 PT" item={COMMON_FAQ_ITEM} />*/}
      </HomeMain>
    </div>
  );
};

export default Pt;
