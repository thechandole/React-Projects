import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : 'light',
    darkTheme : ()=>{},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider

// this is custom hook only provide ThemeContext
export const useTheme = () => {

    return useContext(ThemeContext)
}