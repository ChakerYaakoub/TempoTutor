import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfil: false,
    notification: false
}

export const ContextProvider = ({ children }) => { // for the index.js 
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initialState) ;
    const [screenSize, setscreenSize] = useState(undefined) ;
    const [currentColor, setcurrentColor] = useState('#03C9D7') ;
    const [currentMode, setcurrentMode] = useState('Light') ;
    const [themeSettings, setThemeSettings] = useState(false) ;
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setMode = (e)=>{
        setcurrentMode(e.target.value) ;
        localStorage.setItem('themeMode',e.target.value ) ;
        setThemeSettings(false) ;
    }

    const setColor = (color)=>{
        setcurrentColor(color) ;
        localStorage.setItem('colorMode',color) ;
        setThemeSettings(false) ;
    }
    
    


    const handleClick = (clicked) => {
        if (isClicked[clicked] === true) {
          setisClicked({ ...isClicked, [clicked]: false });
        } else {
          setisClicked({ ...isClicked, [clicked]: true });
        }
      };


    // const handleClick = (clicked) =>{
    //     if (initialState[clicked] === true) {
    //          setisClicked({ ...initialState , [clicked] : false}) ;
    //     } else{
    //         setisClicked({ ...initialState , [clicked] : true}) ;

    //     }
       
    // }


    return (
        // value={{test :test}}
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setisClicked ,
                handleClick ,
                screenSize, 
                setscreenSize ,
                currentColor, currentMode ,
                
                themeSettings, setThemeSettings ,
                setMode , setColor ,
                isAuthenticated,setIsAuthenticated
            }}
        >
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext); // for the app.js and another component 