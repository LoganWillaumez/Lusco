import Head from 'next/head';
import styles from '../styles/Home.module.css';

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

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
