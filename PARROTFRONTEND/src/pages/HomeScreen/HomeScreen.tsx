import React, {useEffect, useState} from "react";
import WelcomeLoader from "../../components/WelcomeLoader.tsx";
import DefaultWrapper from "../../components/DefaultWrapper.tsx";
import { ThemeProvider, useTheme } from "../../context/ThemeContext.tsx";
import CardsScreen from "../CardsScreen/CardsScreen.tsx";

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
          <CardsScreen id="1"/>
         
      </DefaultWrapper>
    </ThemeProvider>
     
  );
};

export default HomeScreen;
