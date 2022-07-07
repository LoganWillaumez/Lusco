import { ResultAll } from './ResultAll';
import {
  searchDatas,
  selectSubmitStatus,
  useGetGoogleSearchMutation,
} from '../app/api/getSearch';
import { useSelector } from 'react-redux';
export const ResultSearch = ({ datas }) => {
  return (
    <>
      {datas?.map((data, i) => (
        <div className='flex flex-col' key={data + i}>
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
          <p className='text-white text-base'>{data.description}</p>
        </div>
      ))}
    </>
  );
};
