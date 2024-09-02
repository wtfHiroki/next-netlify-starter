'use client';

import type { NextPage } from "next";
import Head from "next/head";
import Card from '../components/Card';
import Starfield from '../components/Starfield';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hello World!</title>
      </Head>
      <Starfield />
      <Card />
    </div>
  );
};

export default Home;
