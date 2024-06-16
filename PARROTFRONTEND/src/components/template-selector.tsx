
interface TemplateSelectorProps {
  height?: string;
  width?: string;
  boardImage?: string;
}
export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  boardImage
 }) => {
  return (
    <div className={`relative w-16 h-10`}>
        <div
          className="relative flex justify-between w-full h-full bg-cover bg-center p-2 mt-4 rounded-sm shadow-lg transition-all duration-300 group hover:cursor-pointer"
          style={{ backgroundImage: `url(${boardImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-25 transition-opacity duration-200 rounded-sm"></div>
        </div>
    </div>
  );
};
