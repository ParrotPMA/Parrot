import React from 'react';

interface ButtonProps {
  className: string;
  title: string;
  image?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, title, image }) => {
  return (
    <div className={`bg-[#00C2E0] h-9 flex items-center justify-center rounded-md w-full ${className}`}>
        {image && <img src={image} alt="" className='h-6 w-6 flex' />}
        <button className="text-white">{title}</button>
    </div>
  );
};
