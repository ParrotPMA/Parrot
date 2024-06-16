import { Link } from 'react-router-dom';
import kanbanImage from '../assets/images/kanban.jpg';

interface WorkspaceTilesProps {
  height?: string;
  width?: string;
  isCustom?: boolean;
  boardImage?: string;
}
let image = kanbanImage;
export const WorkspaceTiles: React.FC<WorkspaceTilesProps> = ({ 
  width=48,
  height=24,
  isCustom,
  boardImage=image,
 }) => {
  return (
    <div className={`relative w-${width} h-${height}`}>
      <Link to={'/kanban'}>
        <div
          className="relative flex justify-between w-full h-full bg-cover bg-center p-2 mt-4 rounded-sm shadow-lg transition-all duration-300 group hover:cursor-pointer"
          style={{ backgroundImage: `url(${boardImage})` }}
        >
          {!isCustom && <p className="text-base font-custom font-semibold text-white z-10">Kanban Template</p>}
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-opacity duration-200 rounded-sm"></div>
        </div>
      </Link>
    </div>
  );
};
