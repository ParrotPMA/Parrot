import { WorkspaceTiles } from "./workspace-tiles";
import boardImage1 from '../assets/images/board-1.jpg'
import boardImage2 from '../assets/images/board-2.jpg'
import boardImage3 from '../assets/images/board-3.jpg'
import boardImage4 from '../assets/images/board-4.jpg'
import { TemplateSelector } from "./template-selector";
import { useState } from "react";

const CreateBoard = () => {
const [image, setImage] = useState("");
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
  return (
    <div className="flex flex-col absolute top-12 left-[550px] w-[21%] h-[80%] bg-white shadow-lg rounded-lg p-4">
      <div className="flex justify-between">
        <span>back</span>
        <h2 className="text-sm font-semibold font-custom">Create board</h2>
        <span>close</span>
      </div>
      <div className="self-center w-">
        <WorkspaceTiles boardImage={image} isCustom={true}/>
      </div>
      <div className="flex flex-col justify-between item-center pt-4">
        <label className="text-xs font-bold">Background</label>
        <div className="flex justify-between">
          <div onClick={() => handleImage("1")}>
            <TemplateSelector height="10" width="16" boardImage={boardImage1} />
          </div>
          <div onClick={() => handleImage("2")}>
            <TemplateSelector height="10" width="16" boardImage={boardImage2} />
          </div>
          <div onClick={() => handleImage("3")}>
            <TemplateSelector height="10" width="16" boardImage={boardImage3} />
          </div>
          <div onClick={() => handleImage("4")}>
            <TemplateSelector height="10" width="16" boardImage={boardImage4} />
          </div>
          

          {/* <WorkspaceTiles /> */}
        </div>
      </div>
    </div>
  );
};

export default CreateBoard;
