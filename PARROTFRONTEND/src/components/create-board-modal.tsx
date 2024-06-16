import { useState } from "react";

interface CreateBoardModalProps {
    onStateChange?: (data: boolean) => void;
}

export const CreateBoardModal: React.FC<CreateBoardModalProps> = ( {onStateChange} ) => {
    const [isCreateBoard, setIsCreateBoard] = useState(false);
    const handleCreateBoard = () => {
        setIsCreateBoard(!isCreateBoard);
        onStateChange && onStateChange(isCreateBoard);
    }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
        <div className="flex flex-col gap-4 absolute top-12 left-[550px] w-72 h-60 bg-white shadow-lg rounded-lg pt-4">
            <div className="flex flex-col hover:bg-gray-300 cursor-pointer px-4" onClick={handleCreateBoard}>
                <span className="text-sm font-semibold">Create board</span>
                <span className="text-xs font-normal">A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</span>
            </div>
            <div className="flex flex-col hover:bg-gray-300 cursor-pointer px-4">
                <span className="text-sm font-semibold">Start with a template</span>
                <span className="text-xs font-normal">Get started faster with a board template.</span>
            </div>
            <div className="flex flex-col hover:bg-gray-300 cursor-pointer px-4">
                <span className="text-sm font-semibold">Create workspace</span>
                <span className="text-xs font-normal">A Workspace is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</span>
            </div>
        </div>
    </div>
  )
}
