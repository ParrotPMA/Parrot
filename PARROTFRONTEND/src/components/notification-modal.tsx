import { useState } from "react";
import ToggleSwitch from "./toggle-switch";


const NotificationModal = () => {

  const [showUnreadMessages, setShowUnreadMessages] = useState(false);

  const setStateChange = (newState: boolean) => {
    setShowUnreadMessages(!newState);
  }

  return (
    <div className="flex flex-col absolute top-12 right-0 w-[30%] h-[60%] bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-custom font-bold mb-2">Notifications</h2>
        </div>
        <div className="flex items-baseline gap-3">
          <label className="font-normal font-custom text-xs">Only show unread</label>
          <ToggleSwitch onStateChange={setStateChange}/>
        </div>
      </div>
      <div>
        <hr className='bg-gray-500 mt-2' />
      </div>
      {showUnreadMessages && (
      <div className="flex flex-grow items-center justify-center">
        <h3 className="p-4 text-xl font-medium font-custom">No unread notifications</h3>
      </div>
    )}
    </div>
  );
};

export default NotificationModal;
