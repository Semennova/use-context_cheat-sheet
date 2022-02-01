
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import { ThemeProvider } from './components/ThemeContext';
// import ThemeCo

function App() {
  return (
    <ThemeProvider>
        <FunctionalComponent />
    </ThemeProvider>
  
  );
}

export default App;
