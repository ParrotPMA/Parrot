import React from 'react';
import { Link } from 'react-router-dom';
import { useItemsStore } from '../store/store';

interface WorkspaceTilesProps {
  height?: string;
  width?: string;
  isCustom?: boolean;
  boardImage?: string;
}

const WorkspaceTiles: React.FC<WorkspaceTilesProps> = ({ 
  isCustom,
}) => {
  const { items } = useItemsStore();

  console.log("Items", items);

  return (
    <div className={`relative w-48 h-24`}>
      {items.map((item) => (
        <Link to={'/kanban'}>
          <div
            className="relative flex justify-between w-full h-full bg-cover bg-center p-2 mt-4 rounded-sm shadow-lg transition-all duration-300 group hover:cursor-pointer"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {!isCustom && <p className="text-base font-custom font-semibold text-white z-10">{item.title}</p>}
            <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-opacity duration-200 rounded-sm"></div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkspaceTiles;
