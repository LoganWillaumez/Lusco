import { ResultAll } from './ResultAll';
import {
  searchDatas,
  selectSubmitStatus,
  useGetGoogleSearchMutation,
} from '../app/api/getSearch';
import { useSelector } from 'react-redux';
export const ResultSearch = () => {
  const [getGoogleSearch, { data: dataSearch, isLoading: isLoadingSearch }] =
    useGetGoogleSearchMutation({ fixedCacheKey: 'myCacheKey' });
  return <></>;
};
