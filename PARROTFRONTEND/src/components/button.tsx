import React from 'react';

interface ButtonProps {
  className?: string;
  title?: string;
  image1?: string;
  image2?: string;
  isIconButton?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, title, image1, image2, isIconButton }) => {
  return (
    <div className={`${isIconButton ? 'bg-white' : `bg-[#388BFF] h-12 flex items-center justify-center rounded-sm ${className}`}`}>
      {isIconButton && <img src={image1} className='h-5 w-5 hover:cursor-pointer'/>}
        {image2 && !isIconButton && <img src={image2} alt="" className='h-6 w-6 flex'/>}
        {!isIconButton && <button className="text-white">{title}</button>}
    </div>
  );
};
