import { useState, MouseEvent } from 'react';
import { toggleClick, handleChange, resetPage } from '../app/api/searchSlice';
import { useGetGoogleSearchMutation } from '../app/api/getSearch';
import { useAppDispatch, useAppSelector } from '../app/reduxHooks';
import { links } from '../data/links';

export const SearchBar = () => {
  const [isFirstClick, setIsFirstClick] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [getGoogleSearch, { data: dataSearch, isLoading: isLoadingSearch }] =
    useGetGoogleSearchMutation({ fixedCacheKey: 'myCacheKey' });
  const { isClick, type } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`transition-all  flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 md:gap-2 lg:gap-3 text-white z-30 ${
        isClick !== null
          ? isClick
            ? 'animate-mooveUp gap-0 lg:gap-0'
            : 'animate-mooveDown'
          : ''
      }`}
    >
      <h1 className='text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold'>
        Lusco
      </h1>
      <h2
        className={`transition-all  duration-400 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] ${
          isClick !== null ? isClick && 'opacity-0 h-0' : ''
        } `}
      >
        Personnal project using google API and Next
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (searchTerm !== '') {
            getGoogleSearch({ type, searchTerm });
            setIsFirstClick(true);
            if (isClick === false || isClick === null) {
              dispatch(toggleClick());
            } else {
              console.log('ok');
              dispatch(resetPage());
            }
          }
        }}
        className='flex gap-3 items-center w-[80vw] max-w-[500px]'
      >
        <input
          placeholder='Search a term...'
          type='text'
          value={searchTerm}
          className='relative rounded w-full pl-3 shadow-lg text-black'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type='submit' className='w-10 h-6 bg-white rounded shadow-lg'>
          <i className='fa-solid fa-magnifying-glass text-gray-400' />
        </button>
        <div
          className={` transition-all flex gap-4 absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 ${
            isClick && isFirstClick
              ? 'opacity-100'
              : isFirstClick
              ? 'opacity-0'
              : ''
          }`}
        >
          {links.map(({ link, text }, i) => {
            return (
              <button
                key={link}
                value={link}
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  const typeNew: string = (e.target as HTMLInputElement).value;
                  dispatch(handleChange({ name: 'type', value: typeNew }));
                  dispatch(resetPage());

                  searchTerm !== '' &&
                    getGoogleSearch({ type: typeNew, searchTerm });
                }}
                className={`duration-200 whitespace-nowrap transition-all ${
                  type === link && 'underline translate-y-1'
                }`}
                type='button'
              >
                {text}
              </button>
            );
          })}
        </div>
      </form>
    </div>
  );
};
