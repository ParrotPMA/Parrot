import React from "react";
import CustomKanban from "../../components/Board";
interface HomeScreenProps {
  id: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ id }) => {
  return (
    <div className="flex flex-row h-screen w-full justify-center text-neutral-50 items-center bg-neutral-900">
      <text className="text-lg font-extrabold ">{id}</text>
      <div>
        <CustomKanban />
      </div>
    </div>
  );
};

export default HomeScreen;
