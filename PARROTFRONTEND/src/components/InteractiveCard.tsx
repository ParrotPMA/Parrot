import { motion } from "framer-motion";
import DropIndicator from "./DropIndicator";
/**
 *
 * @Components
 * 1. DropIndicator a violet line to tell on which column we are dropping/dragging the card
 * @param title
 * @returns
 */
const InteractiveCard = ({
  title,
  id,
  column,
  handleDragStart,
}: {
  title: string;
  id: string;
  column: number;
  handleDragStart: any;
  startTime: Date;
  authors: string[];
}) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded-lg border-2 border-neutral-700 shadow-2xl  p-3 active:cursor-grabbing"
      >
        <p className="text-sm ">{title}</p>
      </motion.div>
    </>
  );
};

export default InteractiveCard;
