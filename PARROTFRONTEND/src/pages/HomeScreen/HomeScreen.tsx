import React from "react";
interface HomeScreenProps {
  id: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ id }) => {
  return (
      <div className="flex flex-row justify-center items-center bg-blue md:bg-red-500 lg:bg-amber-500">
          <text className="text-lg text-red-700 ">{id}</text>
          <text className="text-lg text-red-700 ">{id}</text>
      </div>
  );
};

export default HomeScreen;
