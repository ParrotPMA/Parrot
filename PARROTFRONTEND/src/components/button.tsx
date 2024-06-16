import React, { useState } from 'react';

type ButtonProps = {
  className?: string;
  title?: string;
  image1?: string;
  image2?: string;
  isIconButton?: boolean;
  onStateChange?: (newState: boolean) => void;
  enabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, title, image1, image2, isIconButton, onStateChange, enabled = true }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    enabled && setIsActive(!isActive);
    enabled && onStateChange && onStateChange(isActive);
  };

  return (
    <div 
      className={`${isIconButton ? 'bg-white' : enabled ? 'bg-[#388BFF]' : 'bg-gray-200'} h-12 flex items-center justify-center rounded-sm ${className}`} 
      onClick={handleClick}
    >
      {isIconButton && <img src={image1} className='h-5 w-5 hover:cursor-pointer'/>}
      {image2 && !isIconButton && <img src={image2} alt="" className='h-4 w-4 flex'/>}
      {!isIconButton && <button className="text-white pl-2 font-medium">{title}</button>}
    </div>
  );
};
