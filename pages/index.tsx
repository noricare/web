import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import {
  DonutWrapper,
  ImageSliderWrapper,
  ValueWrapper,
  ProgramWrapper,
  FAQWrapper,
  ReviewWrapper,
  NewsWrapper,
} from 'components/main';
import styled from '@emotion/styled';
import { applyMediaQuery, Colors, Fonts } from 'styles';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMain>
        <ImageSliderWrapper />
        <DonutWrapper />
        <ValueWrapper />
        <ProgramWrapper />
        <ReviewWrapper />
        <NewsWrapper />
        <FAQWrapper />
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
