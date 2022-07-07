import { useSelector, useDispatch } from 'react-redux';
import { searchDatas } from '../app/api/getSearch';
export const ResultAll = () => {
  const dispatch = useDispatch();
  const { isClick, page } = useSelector((state) => state.search);
  return (
    <div
      className={`transition-all  relative mt-[15vh] bg-gray-900 rounded bg-opacity-60 flex flex-col gap-5 overflow-y-scroll overflow-x-hidden p-10 pt-16  h-[70vh] w-[80vw] ${
        isClick ? 'animate-fadeInResult' : 'animate-fadeOutResult'
      }`}
    >
      {/* {searchDatas?.map((data, i) => {
        return (
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
        );
      })} */}
      <p className='text-white absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {isLoadingSearch
          ? "It's loading, please wait..."
          : `Result ${page} to ${page + 10}`}
      </p>
      <button
        onClick={() => dispatch(toggleClick())}
        type='button'
        className='absolute top-5 right-5 text-white'
      >
        <i className=' fa-solid fa-x'></i>
      </button>
      {/* <Pagination page={page} data={dataFilter}  /> */}
    </div>
  );
};
