import { useState } from 'react';
import { useGetGoogleSearchMutation } from '../app/api/getSearch';

export const SearchBar = () => {
  const [isClick, setIsClick] = useState(false);
  const [isFirstClick, setIsFirstClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState('search');
  const toggleClick = () => {
    setIsClick(!isClick);
  };
  const [getGoogleSearch] = useGetGoogleSearchMutation();
  return (
    <div
      className={`transition-all flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 md:gap-2 lg:gap-3 text-white   ${
        isClick && isFirstClick
          ? 'animate-mooveUp'
          : isFirstClick
          ? 'animate-mooveDown'
          : ''
      }`}
    >
      <h1 className='text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold'>
        Lusco
      </h1>
      <h2
        className={`transition-all duration-400 text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] ${
          isClick && isFirstClick && 'opacity-0 h-0'
        } `}
      >
        Personnal project using google API and Next
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getGoogleSearch({ type, searchTerm });
          setIsFirstClick(true);
          toggleClick();
        }}
        className='flex gap-3 items-center w-[80vw] max-w-[500px]'
      >
        <input
          placeholder='Search a term...'
          type='text'
          value={searchTerm}
          className='rounded w-full pl-3 shadow-lg text-black'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button type='submit' className='w-10 h-6 bg-white rounded shadow-lg'>
          <i className='fa-solid fa-magnifying-glass text-gray-400' />
        </button>
      </form>
    </div>
  );
};
