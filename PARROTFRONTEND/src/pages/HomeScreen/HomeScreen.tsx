import React, {useEffect, useState} from "react";
import WelcomeLoader from "../../components/WelcomeLoader.tsx";
import DefaultWrapper from "../../components/DefaultWrapper.tsx";
import ThemeSwitch from "../../components/ThemeSwitch.tsx";
import MyComponent from "../../components/MyComponent.tsx";
import { ThemeProvider, useTheme } from "../../context/ThemeContext.tsx";

const HomeScreen: React.FC = () => {
    const { getThemeStyles } = useTheme();
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
    <ThemeProvider>
         <DefaultWrapper>
          <div className="p-12 flex w-1/2 flex-col border-2 border-black rounded-md shadow-lg">
          <p>abcdefc</p>
          </div>
         
      </DefaultWrapper>
    </ThemeProvider>
     
  );
};

export default HomeScreen;
