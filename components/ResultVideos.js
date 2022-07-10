import { truncateString } from '../utils/truncateString';
import ReactPlayer from 'react-player';
export const ResultVideos = ({ datas }) => {
  return (
    <div className='flex justify-center'>
      <div className='flex gap-6 flex-wrap justify-center h-full w-fit max-w-fit'>
        {datas?.map((data, i) => (
          <div key={data + i}>
            <h3 className='text-[#8BB4F8] font-bold'>
              {truncateString(data.title, 40)}
            </h3>
            <div className='aspect-video xs:w-[200px] md:w-[400px]'>
              <ReactPlayer
                url={data.link}
                controls
                width='100%'
                height='100%'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
