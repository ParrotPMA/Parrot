import kanbanImage from '../assets/images/kanban.jpg';

interface TemplateSelectorProps {
  height?: string;
  width?: string;
  boardImage?: string;
}
let image = kanbanImage;
export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  width=48,
  height=24,
  boardImage=image
 }) => {
  return (
    <div className={`relative w-${width} h-${height}`}>
        <div
          className="relative flex justify-between w-full h-full bg-cover bg-center p-2 mt-4 rounded-sm shadow-lg transition-all duration-300 group hover:cursor-pointer"
          style={{ backgroundImage: `url(${boardImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-opacity duration-200 rounded-sm"></div>
        </div>
    </div>
  );
};
