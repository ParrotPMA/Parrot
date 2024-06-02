import React, {useEffect, useState} from "react";
import WelcomeLoader from "../../components/WelcomeLoader.tsx";

const HomeScreen: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },3000)
    },[])
    if (isLoading) {
    return <WelcomeLoader  />;
  }
  return (
      <div className="flex flex-col justify-center items-center bg-black">
          <p className="text-4xl text-center text-amber-600"> Home screen</p>
      </div>
  );
};

export default HomeScreen;
