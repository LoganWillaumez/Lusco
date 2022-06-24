import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { searchDatas } from '../app/api/getSearch';
import { Spinner } from './Spinner';
import { data } from '../data/tempData';
import { Pagination } from './Pagination';
import { ResultSearch } from './ResultSearch';
export const Result = ({ isLoadingSearch, dataSearch }) => {
  const { page } = useSelector((state) => state.search);
  const [dataFilter, setDataFilter] = useState([]);
  useEffect(() => {
    const dataPage = dataSearch?.results.slice(
      page === 0 ? 0 : page,
      page === 0 ? 10 : page + 10
    );
    setDataFilter(dataPage);
  }, [page]);

  return (
    <>
      {isLoadingSearch ? <Spinner /> : <ResultSearch dataFilter={dataFilter} />}
    </>
  );
};
