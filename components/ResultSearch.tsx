interface dataSearch {
  link: string;
  title: string;
  description: string;
  cite: {
    domain: string;
  };
}

import { truncateString } from '../utils/truncateString';
export const ResultSearch = ({ datas }) => {
  return (
    <div className='flex flex-col gap-6 h-[50px]'>
      {datas?.map((data: dataSearch, i: number) =>
        data.description ? (
          <div className='flex flex-col' key={data.link + i}>
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='text-white cursor-pointer'
            >
              {data.cite.domain}
            </a>
            <a
              href={data.link}
              target='_blank'
              rel='noreferrer'
              className='text-blue-300 font-bold cursor-pointer'
            >
              {data.title}
            </a>
            <p className='text-white text-xs md:text-base'>
              {truncateString(data.description, 100)}
            </p>
          </div>
        ) : (
          ''
        )
      )}
    </div>
  );
};
