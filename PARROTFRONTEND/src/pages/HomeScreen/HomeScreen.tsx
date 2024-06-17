import React from "react";
import CustomKanban from "../../components/Board";
interface HomeScreenProps {
  id: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ id }) => {
  return (
    <div className="flex p-5 flex-col gap-4 h-screen w-full justify-center text-neutral-50 items-center bg-neutral-900">
      <div>
        <text className="text-lg font-extrabold ">Title: {id}</text>
      </div>
      <div>
        <CustomKanban />
      </div>
    </div>
  );
};

export default HomeScreen;
