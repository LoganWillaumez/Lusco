import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../app/api/SearchSlice';

export const Pagination = ({ datas }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.search);
  return (
    <div
      className={`text-white text-center flex gap-3 m-auto  absolute bottom-5 left-1/2 transform -translate-x-1/2 `}
    >
      {datas?.results
        ? new Array(Math.floor(datas?.results.length / 10))
            .fill([])
            .map((number, i) => {
              return (
                <button
                  type='button'
                  onClick={(e) => {
                    dispatch(
                      handleChange({
                        name: 'page',
                        value: Number(e.target.value),
                      })
                    );
                  }}
                  value={i}
                  key={i}
                  className={`transition-all w-5 h-5 text-black  rounded-2xl flex items-center justify-center ${
                    page === i
                      ? 'bg-orange-400 text-gray-100'
                      : 'bg-white text-black'
                  }`}
                >
                  {i}
                </button>
              );
            })
        : ''}
    </div>
  );
};
