export const SearchBar = () => {
  return (
    <div className='flex flex-col items-center gap-1 md:gap-2 lg:gap-3 text-white'>
      <h1 className='text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] font-bold'>
        Lusco
      </h1>
      <h2 className='text-[0.6rem] md:text-[0.8rem] lg:text-[1rem]'>
        Personnal project using google API and Next
      </h2>
      <form className='flex  gap-3 items-center w-[80vw] max-w-[500px]'>
        <input type='text' className='rounded w-full' />
        <button type='submit' className='w-10 h-6 bg-white rounded'>
          <i className='fa-solid fa-magnifying-glass text-gray-400' />
        </button>
      </form>
    </div>
  );
};
