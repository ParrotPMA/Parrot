// src/ToggleSwitch.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';

interface ToggleSwitchProps {
    onStateChange?: (newState: boolean) => void
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onStateChange }) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
    onStateChange && onStateChange(isOn);
  };

  return (
    <div className="flex">
      <div
        className={`w-10 h-5 flex rounded-full p-1 cursor-pointer ${isOn ? 'bg-[#00875A]' : 'bg-gray-300'}`}
        onClick={toggleSwitch}
      >
        <motion.div
          className="bg-white w-3 h-3 rounded-full shadow-md"
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          style={{ x: isOn ? 20 : 0 }}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
