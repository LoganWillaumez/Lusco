import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetGoogleSearchMutation } from '../app/api/getSearch';
import { Spinner } from './Spinner';
import { Pagination } from './Pagination';
import { ResultSearch } from './ResultSearch';
import { toggleClick } from '../app/api/searchSlice';
import { ResultImages } from './ResultImages';
import { ResultVideos } from './ResultVideos';
import { useAppDispatch, useAppSelector } from '../app/reduxHooks';
export const Result = () => {
  const dispatch = useAppDispatch();
  const [getGoogleSearch, { data: dataSearch, isLoading: isLoadingSearch }] =
    useGetGoogleSearchMutation({ fixedCacheKey: 'myCacheKey' });
  const { isClick, page, type } = useAppSelector((state) => state.search);
  const [dataFilter, setDataFilter] = useState<[]>([]);
  const [dataRaw, setDataRaw] = useState<[]>([]);
  useEffect(() => {
    const dataQuery =
      type === 'search' || type === 'video'
        ? dataSearch?.results
        : type === 'image'
        ? dataSearch?.image_results
        : [];
    setDataRaw(dataQuery);
    const dataPage = dataQuery?.slice(
      page === 0 ? 0 : page * 10,
      page === 0 ? 10 : (page + 1) * 10
    );
    setDataFilter(dataPage);
  }, [page, dataSearch]);

  return (
    <div
      className={`transition-all relative mt-[15vh] bg-gray-900 rounded bg-opacity-60 flex flex-col gap-5 overflow-hidden p-10 pt-16 h-[70vh] w-[80vw] top-[100%] ${
        isClick === null
          ? ''
          : isClick
          ? 'animate-fadeOutResult'
          : 'animate-fadeInResult'
      }`}
    >
      {isLoadingSearch ? (
        <Spinner />
      ) : type === 'search' ? (
        <div className='h-[90%] overflow-scroll scrollbar-hide'>
          <ResultSearch datas={dataFilter} />
        </div>
      ) : type === 'image' ? (
        <div className='h-[90%] overflow-scroll scrollbar-hide'>
          <ResultImages datas={dataFilter} />
        </div>
      ) : type === 'video' ? (
        <div className='h-[90%] overflow-scroll scrollbar-hide'>
          <ResultVideos datas={dataFilter} />
        </div>
      ) : (
        ''
      )}
      <p className='text-white absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {isLoadingSearch
          ? "It's loading, please wait..."
          : `Page ${page} to ${
              Math.floor(dataRaw?.length / 10 - 1) === 1
                ? '1'
                : Math.floor(dataRaw?.length / 10 - 1)
            }`}
      </p>
      <button
        onClick={() => dispatch(toggleClick())}
        type='button'
        className='absolute top-5 right-5 text-white'
      >
        <i className=' fa-solid fa-x'></i>
      </button>
      <Pagination dataRaw={dataRaw} datas={dataSearch} />
    </div>
  );
};
