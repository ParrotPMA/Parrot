import React, { useState } from 'react';

type ButtonProps = {
  className?: string;
  title?: string;
  image1?: string;
  image2?: string;
  isIconButton?: boolean;
  onStateChange?: (newState: boolean) => void
}
export const Button: React.FC<ButtonProps> = ({ className, title, image1, image2, isIconButton, onStateChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onStateChange && onStateChange(isActive);
  };
  return (
    <div className={`${isIconButton ? 'bg-white' : `bg-[#388BFF] h-12 flex items-center justify-center rounded-sm ${className}`}`} onClick={handleClick} >
      {isIconButton && <img src={image1} className='h-5 w-5 hover:cursor-pointer'/>}
        {image2 && !isIconButton && <img src={image2} alt="" className='h-4 w-4 flex'/>}
        {!isIconButton && <button className="text-white pl-2 font-medium">{title}</button>}
    </div>
  );
};
