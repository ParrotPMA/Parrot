import { useState } from "react";
import { Card } from "../types/card";
import { DEFAULT_CARDS, DEFAULT_COLUMNS } from "../data/data";
import BurnBarrel from "./BurnBarrel";
import InteractiveColumn from "./InteractiveColumn";

export const CustomKanban = () => {
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </div>
  );
};

const Board = () => {
  const [cards, setCards] = useState<Card[]>(DEFAULT_CARDS);
  const data_columns = DEFAULT_COLUMNS(cards, setCards);
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {data_columns.map((column, index) => (
        <InteractiveColumn
          key={index}
          title={column.title}
          column={column.column}
          headingColor={column.headingColor}
          cards={column.cards}
          setCards={column.setCards}
        />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
  );
};

export default CustomKanban;
