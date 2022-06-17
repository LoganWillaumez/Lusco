import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { searchDatas } from '../app/api/getSearch';
import { data } from '../data/tempData';
export const Result = ({ isClick, toggleClick }) => {
  const searchDatasGoogle = useSelector(searchDatas);
  return (
    <div
      className={`transition-all  relative mt-[15vh] bg-gray-900 rounded bg-opacity-60 flex flex-col gap-5 overflow-scroll p-10 pt-16  h-[70vh] w-[80vw] ${
        isClick ? 'animate-fadeOutResult' : 'animate-fadeInResult'
      }`}
      // h-[70vh]  w-[80vw]
    >
      {data.data.results.map((data, i) => {
        return (
          <div className='flex flex-col' key={data + i}>
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='text-white'
            >
              {data.cite.domain}
            </a>
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='text-blue-300 font-bold'
            >
              {data.title}
            </a>
            <p className='text-white text-base'>{data.description}</p>
          </div>
        );
      })}
      <p className='text-white absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {data.data.results.length} results found
      </p>
      <button
        onClick={() => toggleClick()}
        type='button'
        className='absolute top-5 right-5 text-white'
      >
        <i className=' fa-solid fa-x'></i>
      </button>
    </div>
  );
};
