import Head from 'next/head';
import '../styles/global.css';
import Header from '../components/Header';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
  </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
