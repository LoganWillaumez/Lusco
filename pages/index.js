import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';

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
      </Head>

      <main className='bg-[url(/images/light.jpg)] h-screen w-screen bg-cover'></main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
