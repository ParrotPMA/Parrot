import { useState } from 'react'
import expandDown from '../assets/images/expand-down.png'
import expandUp from '../assets/images/expand-up.png'

type DropDownProps = {
    title: string;
};

export const DropDown = ({ title }: DropDownProps) => {
    const [toggle, setToggle] = useState(true);
    const [toggleImage, setToggleImage] = useState(expandDown);

    const handleToggle = () => {
        setToggle(!toggle);
        !toggle ? setToggleImage(expandUp) : setToggleImage(expandDown);
    }
  return (
    <div className='flex items-center pl-6'>
        <button className='text-sm font-normal text-[#49454E]' onClick={handleToggle}>{title}</button>
        <img src={toggleImage} alt="" className='h-6 w-6' />
    </div>
  )
}
