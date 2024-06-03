import trello from '../assets/images/trello-icon.png'
import { DropDown } from './dropdown'

const dropdownLists: string[] = ["Workspace", "Recent", "Starred", "Templates"]
// testing github webhook
export const TopBar = () => {
  return (
    <div className='flex justify-center items-center w-full px-7 pt-6'>
        <img src={trello} height={40} width={40} alt='trello-logo' className='pr-2'/>
        <p className='font-bold text-3xl text-[#007AC0] font-serif'>Trello</p>
        {dropdownLists.map((item: string, index: number) => (
            <DropDown title={item} key={index}/>
        ))}
        
    </div>
  )
}
