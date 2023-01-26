import type { NextPage } from 'next';
import { ImageMain, FAQWrapper } from 'components/common';
import { NextSeo } from 'next-seo';
import { HomeMain } from '.';
import { ProgramWrapper } from 'components/center';
import { COMMON_FAQ_ITEM } from 'constant/FAQItem';

const Center: NextPage = () => {
  return (
    <div>
      <NextSeo
        title="노리케어 | 노인 복지 기관 운동 프로그램 | noricare"
        description="노인 복지기관 대상 목적, 형태, 규모에 따른 맞춤형 수업 제공 + 결과 분석 토탈 헬스케어 서비스"
        canonical="https://www.noricare.kr/center"
        openGraph={{
          type: 'website',
          locale: 'ko_KR',
          url: 'https://www.noricare.kr/center',
          title: '노리케어 | 노인 복지 기관 운동 프로그램 | noricare',
          description: '노인 복지기관 대상 목적, 형태, 규모에 따른 맞춤형 수업 제공 + 결과 분석 토탈 헬스케어 서비스',
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
        <ImageMain src="/centerB2B.jpg" alt="노리케어 기관 수업" width="1650" height="810" />
        <ProgramWrapper />
        {/*<FAQWrapper title="기관 수업" item={COMMON_FAQ_ITEM} />*/}
      </HomeMain>
    </div>
  );
};

export default Center;
