import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { Result } from '../components/Result';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lusco</title>
        <meta
          name='description'
          content='A google clone, done in next.js and tailwindcss'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css'
          integrity='sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=='
          crossOrigin='anonymous'
          referrerpolicy='no-referrer'
        />
      </Head>
      <main className='bg-[url(/images/light.jpg)] h-screen w-screen bg-cover flex justify-center items-center'>
        <SearchBar />
        <Result />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
