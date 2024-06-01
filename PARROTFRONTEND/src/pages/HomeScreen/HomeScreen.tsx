import React from "react";
interface HomeScreenProps {
  id: string;
}
// checking github commit
const HomeScreen: React.FC<HomeScreenProps> = ({ id }) => {
  return (
    <div className="flex flex-row justify-center items-center bg-blue">
      <text className="text-lg text-red-700 ">{id}</text>
    </div>
  );
};

export default HomeScreen;
