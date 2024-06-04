import clockIcon from '../assets/images/clock-five.png';
import { RecentlyViewedTemplate } from './recently-viewed-template';

export const RecentlyViewed = () => {
  return (
    <div className={`flex flex-col items-center`}>
        <div className='flex flex-row items-center'>
            <img src={clockIcon} alt="clock" className='h-5 w-5'/>
            <h3 className='text-base font-bold font-custom pl-2'>Recently viewed</h3>
        </div>
        <div>
            <RecentlyViewedTemplate/>
        </div>
    </div>
  )
}
