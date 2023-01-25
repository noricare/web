import type { NextPage } from 'next';
import { ImageMain, FAQWrapper } from 'components/common';
import Head from 'next/head';
import { HomeMain } from '.';
import { ProgramWrapper } from 'components/center';
import { COMMON_FAQ_ITEM } from 'constant/FAQItem';

const Center: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMain>
        <ImageMain src="/centerB2B.jpg" alt="노리케어 기관 수업" width="1650" height="810" />
        <ProgramWrapper />
        <FAQWrapper title="기관 수업" item={COMMON_FAQ_ITEM} />
      </HomeMain>
    </div>
  );
};

export default Center;
