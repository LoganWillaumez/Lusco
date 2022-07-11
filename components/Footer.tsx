export const Footer = () => {
  return (
    <div className='flex text-white absolute bottom-0 left-0 p-2 w-full'>
      <a
        className='text-[0.6rem] sm:text-[0.8rem] lg:text-[1rem]'
        href='https://www.freepik.com/vectors/background'
        title='Background vector created by freepik - www.freepik.com'
        rel='noreferrer'
        target='_blank'
      >
        Image reference
      </a>
      <a
        className='text-[0.6rem] sm:text-[0.8rem] lg:text-[1rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        href='https://github.com/LoganWillaumez?tab=repositories'
        target='_blank'
        rel='noreferrer'
      >
        Logan Willaumez
      </a>
    </div>
  );
};
