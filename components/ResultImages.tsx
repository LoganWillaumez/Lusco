import Image from 'next/image';
import { Spinner } from './Spinner';

interface dataImages {
  link: {
    href: string;
    title: string;
  };
  image: {
    src: string;
    alt: string;
  };
}
export const ResultImages = ({ datas }) => {
  return (
    <div className='flex gap-6 flex-wrap justify-center h-full'>
      {datas?.map((data: dataImages, i: number) => (
        <div className='flex flex-col' key={data.link.href + i}>
          <a
            href={data.link.href}
            target='_blank'
            rel='noreferrer'
            className='text-blue-300 font-bold cursor-pointer'
          >
            <div className='relative w-[500px] h-[250px]'>
              <Image
                src={data.image.src}
                alt={data.image.alt}
                layout='fill'
                objectFit='cover'
              />
            </div>
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
