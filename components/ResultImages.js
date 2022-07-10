export const ResultImages = ({ datas }) => {
  return (
    <div className='flex gap-6 flex-wrap justify-center h-full'>
      {datas?.map((data, i) => (
        <div className='flex flex-col' key={data + i}>
          <a
            href={data.link.href}
            target='_blank'
            rel='noreferrer'
            className='text-blue-300 font-bold cursor-pointer'
          >
            <img
              className='object-cover w-[500px] h-[250px]'
              src={data.image.src}
              alt={data.image.alt}
            />
          </a>
          <a
            href={data.link.href}
            target='_blank'
            rel='noreferrer'
            className='text-white cursor-pointer'
          >
            {data.link.title}
          </a>
        </div>
      ))}
    </div>
  );
};
