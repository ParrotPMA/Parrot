import React from "react";
import Logo from "../../public/assets/logo.png";

const WelcomeLoader: React.FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black flex justify-center items-center">
        <img
          src={Logo}
          alt="Loading..."
          className="w-64 h-24 animate-bounce"
        />
      </div>
    </>
  );
};

export default WelcomeLoader;
