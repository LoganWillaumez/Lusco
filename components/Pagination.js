import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../app/api/SearchSlice';

export const Pagination = ({ datas, dataRaw }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.search);
  return (
    <div
      className={`text-white text-center flex gap-3 m-auto  absolute bottom-5 left-1/2 transform -translate-x-1/2 `}
    >
      <div className='flex items-center gap-3'>
        <button
          disabled={page === 0 ? true : false}
          className={`font-bold ${page === 0 && 'opacity-0'}`}
          onClick={() => {
            dispatch(
              changePage({
                change: 'decrement',
              })
            );
          }}
        >
          {'<'}
        </button>
        <div className='w-5 h-5 rounded-2xl bg-white flex items-center justify-center'>
          <p className='text-black'>{page}</p>
        </div>
        <button
          disabled={
            page === Math.floor(dataRaw?.length / 10 - 1) ? true : false
          }
          className={`font-bold ${
            page === Math.floor(dataRaw?.length / 10 - 1) && 'opacity-0'
          }`}
          onClick={() => {
            dispatch(
              changePage({
                change: 'increment',
              })
            );
          }}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};
