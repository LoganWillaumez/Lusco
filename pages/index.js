import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { SearchBar } from '../components/SearchBar';
import { Result } from '../components/Result';
import { Suspense, useState } from 'react';
import { useGetGoogleSearchMutation } from '../app/api/getSearch';
import { Spinner } from '../components/Spinner';

export default function Home() {
  const [isClick, setIsClick] = useState(false);
  const [page, setPage] = useState(0);
  const [getGoogleSearch, { data: dataSearch, isLoading: isLoadingSearch }] =
    useGetGoogleSearchMutation();
  const toggleClick = () => {
    setIsClick(!isClick);
  };
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
        <SearchBar
          isClick={isClick}
          toggleClick={toggleClick}
          getGoogleSearch={getGoogleSearch}
          page={page}
          setPage={setPage}
        />
        <Result
          dataSearch={dataSearch}
          isClick={isClick}
          toggleClick={toggleClick}
          isLoadingSearch={isLoadingSearch}
          page={page}
          setPage={setPage}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
