import { RecentlyViewed } from './recently-viewed'
import { YourWorkspace } from './your-workspace'

export const Workspace = () => {
  return (
    <div className='flex flex-col items-start w-[40%] p-11'>
        <RecentlyViewed />
        <YourWorkspace/>
    </div>
  )
}
