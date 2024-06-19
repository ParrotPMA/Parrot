import WorkspaceTiles from "./test";
import boardImage1 from '../assets/images/board-1.jpg'
import boardImage2 from '../assets/images/board-2.jpg'
import boardImage3 from '../assets/images/board-3.jpg'
import boardImage4 from '../assets/images/board-4.jpg'
import { TemplateSelector } from "./template-selector";
import { useEffect, useState } from "react";
import InputBar from "./input-bar";
import { Button } from "./button";
import { useItemsStore } from "../store/store";

interface CreateBoardProps {
  handleCreateModalClose?: (data: boolean) => void;
}

const CreateBoard:React.FC<CreateBoardProps> = ( {handleCreateModalClose} ) => {
const [image, setImage] = useState("");
const [isButtonEnabled, setIsButtonEnabled] = useState(false);
const [isInputQuery, setIsInputQuery] = useState("");
const [isClosed, setIsClosed] = useState(false);
const [boardTitleDisappeared, setBoardTitleDisappeared] = useState(false);
const { addItem } = useItemsStore();

// TODO: Fix Create button enable or disable

useEffect(() => {
  isInputQuery ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  isInputQuery ? setBoardTitleDisappeared(true) : setBoardTitleDisappeared(false);
}, [isInputQuery])

const handleImage = (index: string) => {
  if(index == "1"){
    setImage(boardImage1);
  }else if(index == "2"){
    setImage(boardImage2);
  }else if(index == "3"){
    setImage(boardImage3);
  }else{
    setImage(boardImage4);
  }
}
    
const handleObject = () => {
  const newObject = { title: isInputQuery, image: image };
  addItem(newObject);
}

const handleClose = () => {
  setIsClosed(true);
  handleCreateModalClose && handleCreateModalClose(isClosed);
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-25">
      <div className="flex flex-col z-20 absolute top-12 left-[550px] w-[21%] h-[80%] bg-white shadow-lg rounded-lg p-4 ">
        <div className="flex justify-between">
          <span>back</span>
          <h2 className="text-sm font-semibold font-custom">Create board</h2>
          <span className="cursor-pointer" onClick={handleClose}>close</span>
        </div>
        <div className="self-center">
          <WorkspaceTiles boardImage={image} isCustom={true}/>
        </div>
        <div className="flex flex-col justify-between item-center pt-4">
          <label className="text-xs font-bold">Background</label>
          <div className="flex justify-between">
            <div onClick={() => handleImage("1")}>
              <TemplateSelector boardImage={boardImage1} />
            </div>
            <div onClick={() => handleImage("2")}>
              <TemplateSelector boardImage={boardImage2} />
            </div>
            <div onClick={() => handleImage("3")}>
              <TemplateSelector boardImage={boardImage3} />
            </div>
            <div onClick={() => handleImage("4")}>
              <TemplateSelector boardImage={boardImage4} />
            </div>
          </div>
          <div className="flex flex-col pt-3">
            <div className="flex text-xs font-bold">
              Board title
              <span className="text-red-500">*</span>
            </div>
            <InputBar className="w-full rounded-sm border-2 mt-1" isValue={setIsInputQuery}/>
            {boardTitleDisappeared && 
              <div className="flex">
                <span className="pr-2">👋</span>
                <p className="text-sm font-medium self-center">Board title is required</p>
              </div>
            }
          </div>
          <div className="pt-2" onClick={isButtonEnabled ? handleObject : undefined}>
            <Button title="Create" className="h-9" enabled={isButtonEnabled}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;
