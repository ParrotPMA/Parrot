import { Button } from "./button";
import boardIcon from "../assets/images/trello.png"
import tilesIcon from "../assets/images/tiles.png"
import membersIcon from "../assets/images/member.png"
import settingsIcon from "../assets/images/settings.png"


interface WorkspaceTopBarProps {
    title: string;
}

export const WorkspaceTopBar: React.FC<WorkspaceTopBarProps> = ({ title }) => {
  return (
    <div className='flex items-center justify-between w-full'>
        <h3 className="text-base font-bold font-custom">{title}</h3>
            <Button className="h-8 px-2 bg-gray-600 bg-opacity-30 ml-10" title={"Boards"} image2={boardIcon}/>
            <Button className="h-8 px-2 bg-gray-600 bg-opacity-30 ml-10" title={"View"} image2={tilesIcon}/>
            <Button className="h-8 px-2 bg-gray-600 bg-opacity-30 ml-10" title={"Members"} image2={membersIcon}/>
            <Button className="h-8 px-2 bg-gray-600 bg-opacity-30 ml-10" title={"Settings"} image2={settingsIcon}/>
    </div>
  )
}
