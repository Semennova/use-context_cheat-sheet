import React from 'react'
import { useTheme } from './ThemeContext'

export default function FunctionalComponent() {
    const {darkTheme} = useTheme()
    const {toggleTheme} = useTheme()

    const themeStyle = {
        width: '200px',
        height: '200px',
        color: darkTheme ? '#ccc' : '#333',
        backgroundColor: darkTheme ? '#333' : '#ccc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (<>
        <button onClick={toggleTheme}>Change Theme</button>
        <div style={themeStyle}>
            Functional Component
        </div>
    </>)
}