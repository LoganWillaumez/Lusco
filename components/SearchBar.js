import { useState } from 'react';

export const SearchBar = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleClick = () => {
    setIsClick(!isClick);
  };
  console.log(`🚀 ~ isClick`, isClick);
  return (
    <div
      className={`flex flex-col items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-1 md:gap-2 lg:gap-3 text-white  ${
        isClick && 'animate-mooveUp'
      }`}
    >
      <h1 className='text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold'>
        Lusco
      </h1>
      <h2 className={`text-[0.6rem] md:text-[0.8rem] lg:text-[1rem] `}>
        Personnal project using google API and Next
      </h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toggleClick();
        }}
        className='flex  gap-3 items-center w-[80vw] max-w-[500px]'
      >
        <input type='text' className='rounded w-full' />
        <button type='submit' className='w-10 h-6 bg-white rounded'>
          <i className='fa-solid fa-magnifying-glass text-gray-400' />
        </button>
      </form>
    </div>
  );
};
