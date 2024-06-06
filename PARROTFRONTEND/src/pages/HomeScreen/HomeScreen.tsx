import React from "react";
import Card from "../../components/InteractiveCard";
interface HomeScreenProps {
  id: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ id }) => {
  return (
    <div className="flex flex-row h-screen w-full justify-center text-neutral-50 items-center bg-neutral-900">
      <text className="text-lg font-extrabold ">{id}</text>
      <div>
        <Card />
      </div>
    </div>
  );
};

export default HomeScreen;
