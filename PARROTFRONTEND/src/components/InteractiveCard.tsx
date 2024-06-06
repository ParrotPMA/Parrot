import { motion, useDragControls } from "framer-motion";
const InteractiveCard = () => {
  const controls = useDragControls();

  function startDrag(event) {
    controls.start(event);
  }

  return (
    <>
      <div onPointerDown={startDrag} />
      <motion.div className="bg-red w-5 h-6" drag="x" dragControls={controls}>
        WOW{" "}
      </motion.div>
    </>
  );
};

export default InteractiveCard;
