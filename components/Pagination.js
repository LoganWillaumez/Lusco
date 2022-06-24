import { useDispatch, useSelector } from 'react-redux';
import { handleChange } from '../app/api/SearchSlice';

export const Pagination = ({ data }) => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.search);
  return (
    <div className={`text-white text-center flex gap-3 m-auto`}>
      {/* {new Array(Math.floor(data?.results.length / 10))
        .fill([])
        .map((number, i) => {
          return (
            <button
              type='button'
              onClick={(e) => {
                dispatch(handleChange({
                  name:page,
                  value:Number(e.target.value) * 10
                }))
              }}
              value={i}
              key={i}
              className={`transition-all w-5 h-5 text-black  rounded-2xl flex items-center justify-center ${
                page / 10 === i
                  ? 'bg-orange-400 text-gray-100'
                  : 'bg-white text-black'
              }`}
            >
              {i}
            </button>
          );
        })} */}
    </div>
  );
};
