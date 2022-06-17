import { useSelector } from 'react-redux';
import { searchDatas as searchDatasApi } from '../app/api/getSearch';
useSelector;
export const Result = () => {
  const searchDatas = useSelector(searchDatasApi);
  return (
    <div className='w-[80vw] h-[70vh] mt-[15vh] bg-gray-900 rounded bg-opacity-60'></div>
  );
};
