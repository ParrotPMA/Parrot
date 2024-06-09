import React from "react";
import CustomKanban from "../../components/Board";
interface CardsScreenProps {
  id: string;
}

const CardsScreen: React.FC<CardsScreenProps> = ({ id }) => {
  return (
    <>
      <text className="text-lg font-extrabold ">{id}</text>
      <div>
        <CustomKanban />
      </div>
    </>
  );
};

export default CardsScreen;