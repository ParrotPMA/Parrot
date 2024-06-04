import { RecentlyViewed } from './recently-viewed'
import { YourWorkspace } from './your-workspace'

export const Workspace = () => {
  return (
    <div className='flex justify-end ml-[450px] w-[70%]'>
    <div className='flex flex-col p-11 items-start w-full'>
        <RecentlyViewed />
        <YourWorkspace/>
    </div>
    </div>
  )
}
