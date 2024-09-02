import Head from 'next/head'
import Card from '../components/Card';
import Starfield from '../components/Starfield';

export default function Home() {
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
