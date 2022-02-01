import React, { useState, useContext } from 'react'


export const ThemeContext = React.createContext()

export function useTheme(){
    return useContext(ThemeContext)
}


export function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme)
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}