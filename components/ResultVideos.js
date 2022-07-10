import { ResultAll } from './ResultAll';
import {
  searchDatas,
  selectSubmitStatus,
  useGetGoogleSearchMutation,
} from '../app/api/getSearch';
import { useSelector } from 'react-redux';
import { truncateString } from '../utils/truncateString';
import ReactPlayer from 'react-player';
export const ResultVideos = ({ datas }) => {
  console.log(`🚀 ~ datas video`, datas);
  return (
    <div className='flex gap-6 flex-wrap justify-center h-full'>
      {datas?.map((data, i) => (
        <div key={data + i}>
          <h3 className='text-[#8BB4F8] font-bold'>{data.title}</h3>

          <div className='aspect-video xs:h-[200px] md:h-[200px]'>
            <ReactPlayer url={data.link} controls width='100%' height='100%' />
          </div>
        </div>
      ))}
    </div>
  );
};
